interface SanityBody{
    _createdAt: string; 
    _id: string; 
    _rev: string; 
    _updatedAt: string; 
}

interface Image {
    _type: "image"; 
    asset:{
        _ref: string; 
        _type: "reference"; 
    }
}


export interface PageInfo extends SanityBody {
    _type: "pageInfo"; 
    backgroundInformation: string; 
    heroImage: Image; 
    role: string; 
    name: string; 
    profilePic: Image; 

}