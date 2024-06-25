// utils/auth.js

// Simuler une fonction d'authentification avec des valeurs en dur
const fakeAuth = {
    isAuthenticated: true,
    async login(email, password) {
      // Ici, vous pouvez implémenter la logique réelle d'authentification,
      // comme envoyer une requête au serveur pour vérifier les informations d'identification.
      // Pour cet exemple, nous allons simplement vérifier si l'email et le mot de passe sont valides.
      if (email === 'user@example.com' && password === 'password') {
        this.isAuthenticated = true;
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        throw new Error('Adresse email ou mot de passe incorrect');
      }
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated');
    },
  };
  
  // Hook personnalisé pour utiliser l'authentification dans vos composants
  export const useAuth = () => {
    return fakeAuth;
  };
  
  // Fonction de protection de route pour empêcher l'accès aux pages protégées par l'authentification
  export const protectRoute = (context) => {
    const isAuthenticated = context.isAuthenticated || localStorage.getItem('isAuthenticated');
  
    if (!isAuthenticated) {
      // Redirigez l'utilisateur vers la page de connexion s'il n'est pas authentifié
      context.res.writeHead(302, { Location: '/login' });
      context.res.end();
    }
  
    return { props: {} };
  };
  