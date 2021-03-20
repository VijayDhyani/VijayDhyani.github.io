import {number, string} from '@amcharts/amcharts4/core';

export class UserModel {
   status: string;
   cell: string;
   dob = {age: number, date: Date};
   email: string;
   gender: string;
   id = {
     name: string
   };
   location = {
    city: string,
    coordinates: {
      latitude: string,
      longitude: string
    },
    country: string,
    postcode: string,
    state: string,
    street: {
      name: string,
      number: string
    },
    timezone: {
      description: string,
      offset: string
    }
  };
   login = {
    md5: string,
    password: string,
    salt: string,
    sha1: string,
    sha256: string,
    username: string,
    uuid: string
  };
   name = {
    first: string,
    last: string,
    title: string
  };
   nat: string;
   phone: string;
   picture = {
    large: string,
    medium: string,
    thumbnail: string
  };
   registered = {
    age: number,
    date: Date
  };
   userId: string;

  constructor() {
  }
}
