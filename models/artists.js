const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema ({
    name: String,
    birth: String,
    death: String,
    image: String,
    bio: String,
    era: String,
    image1: { 
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
    image2: { 
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
    image3: { 
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
    image4: { 
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
    image5: { 
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
    image6: { 
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },        
    image7: { 
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
    image8: { 
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
    image9: { 
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
    image10: { 
        type: String,
        default: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    },
})

module.exports = mongoose.model('Artists', artistSchema)