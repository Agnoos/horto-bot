require("dotenv").config();
var Twit = require('twit')
var config = require('./config/config')//imports keys 

var Bot = new Twit(config)

function BotInit() {
  var horto ={
    q:'Hortolandia',
    result_type: "recent",
  };


  Bot.get("search/tweets", horto, BotGoLastestTweet);


  function BotGoLastestTweet(error, data, response){
    if(error){
    console.log(data);
      //console.log(response);
      console.log("Bot não funcionando");
    }else{
      var id = {
        id: data.statuses[0].id_str,
      }
    }
    Bot.post("statuses/retweet/:id", id, BotRetweet);


    function BotRetweet(error, response){
      if(error){
        console.log("Bot não retweetou" + error);
      }else{
        console.log("Bot retweeto"+ id.id)
      }
    }
  }
}
BotInit();

