import Role from "../models/Role";

//initialSetup 
//Inicializa los roles para poder usarlos en la comparación.

export const createRoles = async () => {

    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([

            new Role ({name:"vendedor"}).save(),
            new Role ({name:"admin"}).save()
        ]); 
        
        console.log(values);
    } 
    
    catch (error) {
        console.error(error)
    }
};