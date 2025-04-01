const { fetchDogAPI, fetchDogImage } = require('../api/dogAPI.jsx')

const getAllDogsService = async () => {
    const response = await fetchDogAPI()
    const breeds = response.message

    const dogBreedsWithImages = []
    for (const breed in breeds) {
        const image = await fetchDogImage(breed)
        if (image) {
            dogBreedsWithImages.push({
                breed,
                image
            })
        }
    }

    return dogBreedsWithImages
}

module.exports = {
    getAllDogsService
}