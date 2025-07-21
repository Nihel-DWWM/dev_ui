import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(()=>localStorage.getItem('token'));
    console.log(token)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // Quand le token change, on récupère l'utilisateur
 useEffect(() => {
        const fetchUser = async () => {
            if (!token) {
                setUser(null);
                setLoading(false);
                return;
            }
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3000/users/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Token invalide ou expiré');
                }
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error(error);
                setUser(null);
                setToken(null);
                localStorage.removeItem('token');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [token]);

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        
    };

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}



////1ere solution ////////////////////////////
// import { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//     const [token, setToken] = useState(()=>localStorage.getItem('token'));
//     console.log(token)
//     const [user, setUser] = useState(null);

//     // Quand le token change, on récupère l'utilisateur
//     useEffect(() => {
//         const fetchUser = async () => {
//             if (!token) return;
//             try {
//                 const response = await fetch('http://localhost:3000/users/me', {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                     },
//                 });
//                 if (!response.ok) {
//                     throw new Error('Token invalide ou expiré');
//                 }
//                 const userData = await response.json();
//                 setUser(userData);
//             } catch (error) {
//                 console.error(error);
//                 setUser(null);
//                 setToken(null);
//                 localStorage.removeItem('token');
//             }
//         };

//         fetchUser();
//     }, [token]);

//     return (
//         <AuthContext.Provider value={{ token, setToken, user, setUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }