const apiKey = 'P0w31UX_Y-h6x_wN0uu3_LGo2KIAfnq1-Mw4ABFtz51jep2AR91jf36ThuiSnisQa7f--Jns1kek8uP7_MVBHBSBz4SX-s_vqEbYwFIXQeFsuvoAUfIzUuvFgkcLW3Yx';

class Yelp {
  static search (term, location, soryBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sory_by=${soryBy}`,
      {headers: {Authorization: `Bearer ${apiKey}`}})
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipCode: business.zipCode,
              category: business.category,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
    };
  };
export default Yelp;
