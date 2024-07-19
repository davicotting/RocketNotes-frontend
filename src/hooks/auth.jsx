        import { useEffect } from "react";

    import { createContext, useState } from "react";

    import { useContext } from "react";

    import { api } from "../services/api";

        export const authContext = createContext({});

        function AuthProvider({ children }){

        const [data, setData] = useState({});

        async function signIn({ email, password }){
           

            try{

                const response = await api.post("/sessions", { email, password });
                
                console.log(response);

                const { user, token } = response.data;


                api.defaults.headers.authorization = `Bearer ${token}`;

                localStorage.setItem("@rocketNotes:user", JSON.stringify(user));
                localStorage.setItem("@rocketNotes:token", token);

                setData({ user, token });

            }

            catch(error){

                if(error.response.data.message){
                    alert(error.response.data.message);
                }

                else{
                    alert("Ixi deu ruim! Não foi possivel logar.");
                };

            };



        };

            
        async function updateProfile({ user, avatarFile }){

            

            try{

                if(avatarFile){

                    const fileUploadForm = new FormData();

                    fileUploadForm.append("avatar", avatarFile);

                    const response = await api.patch("/users/avatar", fileUploadForm);


                    user.avatar = response.data.avatar;

                    
                }

                await api.put("/users", user);
                
                localStorage.setItem("@rocketNotes:user", JSON.stringify(user));

                console.log(user);
                console.log(avatarFile)

                setData({user, token: data.token});

                alert("Usuario atualizado com sucesso!");


            } catch(error){

                if(error.response.data.message){
                    alert(error.response.data.message);
                }

                else{
                    alert("Ixi deu ruim! Nao foi possivel alterar os dados do usuario.");
                };

            };

        };


        
        function logOut(){
            
           localStorage.removeItem("@rocketNotes:user");
           localStorage.removeItem("@rocketNotes:token");

            setData({});

        }

        useEffect(() => {


            const user = localStorage.getItem("@rocketNotes:user");
            const token = localStorage.getItem("@rocketNotes:token");

            const parsedUser = JSON.parse(user);

            if(user && token){
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: parsedUser
            });

            };

        }, []);

        return(
            <authContext.Provider value={{signIn, user: data.user, logOut, updateProfile}}>
                {children}
            </authContext.Provider>
        );
    };


    function useAuth(){
        const context = useContext(authContext);
        
        return context;
    };

    export { AuthProvider, useAuth };

    // correcao dos bugs do objeto nulo no localStorage quando mexido.