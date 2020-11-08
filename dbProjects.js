import moongose from 'mongoose';

const projectsSchema = moongose.Schema(
    {
        title : String,
        url : String
    }
);