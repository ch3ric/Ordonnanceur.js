function make(mongoose) {
    //Define schema
    var commandSchema = mongoose.Schema({
        name: String,
        api_url: String,
        api_post_parameters: String,
        max_time: Number,
        stop_on_error: Boolean,
        retry_on_error: Boolean,
        nb_try: Number

    })

    var workflowSchema = mongoose.Schema({
        name: String,
        max_time: Number,
        commands: [commandSchema]
    });

    return mongoose.model('Workflow', workflowSchema);
}

module.exports.make = make;
