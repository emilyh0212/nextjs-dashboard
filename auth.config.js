export const authConfig = {
    pages: {
      signIn: '/login', 
    },
  };
  
  export const callbacks = {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user; 
      const isOnDashboard = nextUrl.pathname.startsWith('/ui'); 
  
      if (isOnDashboard) {
        if (isLoggedIn) return true; 
        return false; 
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/ui/dashboard', nextUrl)); 
      }
  
      return true; 
    },
  };
  
  export const providers = []; 
  