import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import client from "../../../utils/dbpool";

export const authOptions = {
  providers: [
    CredentialsProvider({
        name: "Credentials",
        secret: process.env.NEXTAUTH_SECRET,
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            //database lookup
            const acc = await client.query("SELECT * FROM users where email = $1", [credentials.email]);
            const ver = await client.query("SELECT (pass = crypt($1, pass)) AS pswmatch FROM users where users.email = $2;", [credentials.password, credentials.email]);
            if(acc.rows.length === 0) return null;
            else {
                if(ver.rows[0].pswmatch){
                    return {
                        id: acc.rows[0].id,
                        email: acc.rows[0].email
                    }
                }
                return null;
            }
        }
      })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
        user && (token.user = user)
        return token
    },
    session: async ({ session, token }) => {
        session.user = token.user
        return session
    }
}
}
export default NextAuth(authOptions)