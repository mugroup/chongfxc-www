


  function set_img_src(element,target_src){
    element.setAttribute('src',target_src); 
   } 
  

   function  switch_audio(element,on){


     if(on){
        document.getElementById("sound_btn_off_id").classList.remove("sound_btn_off");
        document.getElementById("audio_id").muted=true;
     }
     else{
        document.getElementById("sound_btn_on_id").classList.remove("sound_btn_off");
        document.getElementById("audio_id").muted=false;
        document.getElementById("audio_id").play();

     }
     element.classList.add("sound_btn_off");

   }



   function showVideo(show){
     if(show){
      document.getElementById("play_video").style.display="inline";
      document.getElementById("audio_id").pause();
      document.getElementById("p_video").play();

     }else{
      document.getElementById("play_video").style.display="none";
      document.getElementById("audio_id").play();
      document.getElementById("p_video").pause();

     }
   }


   function showPannel(id)
   {
    document.getElementById("pannel_text1").style.display="none";
    document.getElementById("pannel_text2").style.display="none";
    document.getElementById("pannel_text3").style.display="none";
    document.getElementById(id).style.display="inline";
      document.getElementById("pannel_body").style.display="inline";

   }

   function closePannel(){
    document.getElementById("pannel_body").style.display="none";
   }