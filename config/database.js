const crypto= require('crypto').randomBytes(256). toString('hex');

module.exports={
    uri:'mongodb://127.0.0.1:27017/'+this.db,
    secret: crypto,
    db: 'movielibrary'
}