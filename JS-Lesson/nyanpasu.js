function main()
{
  var message = prompt('にゃんぱす？'); 

  if (message == 'にゃんぱす')
  {
    alert("ありがとなのん！\nじゃんけんするのん！");
    rentyon_to_jyanken();
  }
  else{
    alert("ノリわるいのんなー");
  }
}

function get_Renge_hand(){
  let renge_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(renge_hand_num == 0){
    hand_name = "グー";
  } else if(renge_hand_num == 1){
    hand_name = "チョキ";
  } else if(renge_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, renge){
  let winLoseStr;

  if(user == "グー"){
    if(renge == "グー"){
      winLoseStr = "あいこ";
    } else if(renge == "チョキ"){
      winLoseStr = "勝ち";
    } else if(renge == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(renge == "グー"){
      winLoseStr = "負け";
    } else if(renge == "チョキ"){
      winLoseStr = "あいこ";
    } else if(renge == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(renge == "グー"){
      winLoseStr = "勝ち";
    } else if(renge == "チョキ"){
      winLoseStr = "負け";
    } else if(renge == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}

function rentyon_to_jyanken(){
    let user_hand = prompt('最初はグー、じゃんけん...');
    
    while (!
      ((user_hand == "グー")||(user_hand == "チョキ")||(user_hand == "パー")||(user_hand == null))
      ){
      user_hand = prompt('選んぶのん！');
      }
    
    let renge_hand = get_Renge_hand();
    let judge = winLose(user_hand, renge_hand);
    
    if (user_hand != null ){
      alert('あなたの選んだ手は' + user_hand + 'です。\nれんちょんの選んだ手は' + renge_hand + 'です。\n結果は' + judge +'です。');
    }else{
      alert('また遊ぶのん...');
    }
}