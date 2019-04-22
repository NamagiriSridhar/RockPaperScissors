
var ask =prompt('Do you want to play a game of Rock Paper Scissors y/n?');
if((ask.trim()).toLowerCase()=='y')
{
    while(true)
    {
       
        var user    = prompt('Enter Rock, Paper or Scissors:');
        user = (user.trim()).toLowerCase();
        
       var computer = Math.floor((Math.random() * 3) + 1);

       switch(computer)
        {
            case 1:
                window.alert('Computer selected Rock'); computer = 'rock' ; break;
            case 2:
                window.alert('Computer selected Paper'); computer = 'paper'; break;
            case 3:
                window.alert('Computer selected Scissors');computer = 'scissors'; break; 
        }
       
        if (user == computer)
        {
            window.alert('Draw');
        }
        else if ((user == 'paper' && computer== 'rock')||(user=='rock' && computer=='scissors') 
            || (user='scissors'&&computer=='paper'))
        {
            window.alert('You win!!');
        }   
        else
        {
            window.alert('I win!! HA HA');
        }
        ask =prompt('Wanna play again y/n?');
        if((ask.trim()).toLowerCase()=='n')
        {
            break;
        }
      }
   
}
 window.alert("See you soon");