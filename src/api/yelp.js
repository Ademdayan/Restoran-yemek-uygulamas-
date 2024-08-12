import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer GyDhAeLE5wC7Pppmq_2gemKJiqtnN4Wwj3vJKk74skzUsiZh19GProVSJ6QWX9I3S6p5E-UtTEyW-3dk8UOAVdITb-vjgmIKG40rFEhdoqVnB3Pn_zJt0Wb0iEWQZnYx",
  },
});
