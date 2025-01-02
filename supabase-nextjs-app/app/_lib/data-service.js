import supabase from './supabase';
//Not recommended for production
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export async function getProducts() {
  
    // const url = `https://fburwlvgdqykibiwbone.supabase.co/rest/v1/products?select=*`;
    // const headers = {
    //   'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZidXJ3bHZnZHF5a2liaXdib25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MTc0MTAsImV4cCI6MjA1MTI5MzQxMH0.PL5_ZZNKn9xRldXZj1m4TtyVhlznhTXGS87RDtkD8Xs',
    //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZidXJ3bHZnZHF5a2liaXdib25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MTc0MTAsImV4cCI6MjA1MTI5MzQxMH0.PL5_ZZNKn9xRldXZj1m4TtyVhlznhTXGS87RDtkD8Xs',
    //   'Content-Type': 'application/json'
    // };
    // const res = await fetch(url, {
    //   method: 'GET',
    //   headers: headers
    // });
    // const cabins = await res.json();
    // return cabins;

    let { data: products, error } = await supabase
  .from('products')
  .select('*')
    if (error) {
      console.error(error);
      throw new Error('Cabins could not be loaded');
    }
  
    return products;
  };