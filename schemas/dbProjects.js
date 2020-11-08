import moongose from 'mongoose';

const projectsSchema = moongose.Schema(
    {
        name : {
            type : String,
            requited : true,
        },
        url : { 
            type : String,
            required : false
        },
        technos : {
            type : Array,
            required : false
        },
        img : {
            type : String,
            required : false
        },
        site : {
            type : String,
            required : false
        },
        added : {
            type : Date,
            default : Date.now
        }
    }
);

export default moongose.model('projects', projectsSchema);