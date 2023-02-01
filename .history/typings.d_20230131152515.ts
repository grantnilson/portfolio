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
    name: string; 
    profilePic: Image; 
    role: string; 

}

export interface Experience extends SanityBody {
    _type: "experience"; 
    company: string; 
    companyImage: Image; 
    dateEnded: date; 
    dateStarted: date; 
    jobTitle: string; 
    points: string[]
}

export interface projectId extends SanityBody {
    _type: "project"; 
    image: Image; 
    linkToBuild: string;  
    summary: string; 
    title: string; 

}