import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useSaveUser = (props) => {
  // console.log("props", props)
  const resource = props.resource
    const queryClient = useQueryClient();
    const url = process.env.REACT_APP_API_URL
    const saveUserMutation = useMutation(
        async ({ id, ...restUserProperties }) => {
            // if (id) {
              try {
                const { data} = await axios.post(`${url}/${resource}`, { id, ...restUserProperties });

                return data;
              } catch (error) {
                return props.onError(error.response.data)
                // return error
              }
               
            // } else {
            //     const { data } = await axios.post("/api/users", { ...restUserProperties });

            //     return data;
            // }
        },
        {
            onSuccess: async (data) => {
                await queryClient.removeQueries("user");
                await queryClient.removeQueries("users");
                if (data && props.onSuccess) {
                    props.onSuccess(data);
                }
            },
        },{
        onError: async (error) =>{
          console.log("sdsds1111111111111111")
          if(props.onError){
            props.onError(error)
          }
        }
      }
    );

    return saveUserMutation;
};

export default useSaveUser;
