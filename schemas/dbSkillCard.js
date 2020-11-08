import moongose from 'mongoose';

const skillCarSchema = moongose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        liste : { 
            type : Array,
            required : true,
        },
        added : {
            type : Date,
            default : Date.now
        }
    }
);

export default moongose.model('skillcard', skillCarSchema);