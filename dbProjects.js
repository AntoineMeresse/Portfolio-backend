import moongose from 'mongoose';

const projectsSchema = moongose.Schema(
    {
        title : String,
        url : String
    }
);

export default moongose.model('projects', projectsSchema);