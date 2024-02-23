const TelegramBot = require('node-telegram-bot-api');

const token = '6365188592:AAFAjF5_TH52D47899ctvZnivepn7f_a5k4';

const bot = new TelegramBot(token, {polling: true});

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
    
//   bot.sendMessage(chatId, 'Assalomu alaykum, men Telegram botman!');
// });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, 'Bot ishga tushdi!');
});

bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, 'Bu bot sizga yordam beradi!');
});

bot.onText(/\/yaratuvchi/,(msg)=>{
    const chatId=msg.chat.id
    bot.sendMessage(chatId,"Bu bot @ddiyorchik tomonidan yaratilgan ")
})

bot.onText(/\/kutubxona/,(msg)=>{
    const chatId=msg.chat.id
    const kutubxona=`
    let members=[]

function create(name,id){
    id=name.slice(-3)+id
    members.push({name:name,id:id})
}

function update(name, newName) {
    for (let member of members) {
      if (member.name === name) {
        member.name = newName;
      }
    }
}

function search(name){
    for(let member of members){
        if(member.name===name){
            console.log(member.id);
        }
    }
}

function deleted(name) {
    // for(let member of members){
    //     if(member.name===name){
    //         member={}
    //         console.log(member);
    //     }
    // }   
    for(let i=0;i<members.length;i++){
        if(members[i].name===name){
            delete members[i]
            console.log(members)
        }
    } 
}


function main(){
    let walk=true
    while (walk) {
        let choises=Number(prompt("Menu:\n0.Chiqish \n1. Yaratish\n2. Almashtirish\n3. Izlash\n4. Ochirish\n Amalni tanlang : "))
        switch(choises){
            case 0:
                walk=false
                break
            case 1:
                let name=prompt("Ism kiriting : ").toLowerCase()
                let id=Number(prompt("Idni kiriting id :"))
                create(name,id)
                console.log(members);
                break;

                
            case 2: 
                let oldname=prompt("Eski ismni kiriting : ").toLowerCase()
                let newName=prompt("Yangi ismni kiriting : ").toLowerCase()
                update(oldname,newName)
                console.log(members);
                break

            case 3:
                let searchName=prompt("Izlayotgan ismni kiriting : ").toLowerCase()
                search(searchName)
                break

            case 4:
                let deleteName = prompt("O'chirmoqchi bo'lgan ismni kiriting : ").toLowerCase();
                deleted(deleteName);
                console.log(members);
                break;
            case 5:
                console.log(members)
            default :
                break;
        }
    }
}
main()
`
    bot.sendMessage(chatId,'Kutubxona kodi')
    bot.sendMessage(chatId, '```javascript\n' + kutubxona + '\n```', {parse_mode: 'Markdown'});
})


bot.onText(/\/bankomatpy/,(msg)=>{
    const chatId=msg.chat.id
    const bankomatpy=`
    """
    accounts = [
        {
        "name": "Ali",
        "pin": 7777,
        "balance": 3500000,
        "id": 1111
        },
        {
            "name": "Vali",
            "pin": 6666,
            "balance": 1500000,
            "id": 8888
        },
        {
            "name": "Olim",
            "pin": 9999,
            "balance": 4500000,
            "id": 4444
        },
        {
            "name": "Hasan",
            "pin": 7777,
            "balance": 9500000,
            "id": 7777
        },
        {
            "name": "Husan",
            "pin": 5555,
            "balance": 7000000,
            "id": 3333
        }
    ]
    
    def menu(pin, id):
        step = True
        while step:
        print("1. Balance:")
        print("2. Transfer:")
        print("3. Withdrawal:")
        choose = int(input("Menudan birini tanlang:"))
        match choose:
            case 1:
                print(check_balance(pin, id))
            case 2:
                print(transfer(pin, id))
            case 3:
                print(paynet(pin, id))
            case _:
                print("default")
        step = exit()
    
    
    def main():
        pin = int(input("parol kiriting:"))
        id = int(input("id kiriting:"))
        if check_user(pin, id):
            menu(pin, id)     
        else:
        print("ID yoki Parol xato!!!")
        
    
    def exit():
        back = int(input("Davom etish uchun 1ni amaliyotni to'xtatish uchun 0ni kiriting"))
        if back == 0:
            step = False
            print("Amaliyot tugatildi")
        else:
            step = True
        return step
            
        
    def loop_dic(pin, id):
      for account in accounts:
        if account["pin"] == pin and account["id"] == id:
          return account
    
    
    def check_user(pin, id):
      account = loop_dic(pin, id)
      if account["pin"] == pin and account["id"] == id:
        return True
      else:
        return False
    
    
    def check_balance(pin, id):
      account = loop_dic(pin, id)
      return account["balance"]
    
    def check_id(send):
        for account in accounts:
            if account["id"] == send:
              return account
            else:
              print("ID xato kiritilgan")
    
    def transfer(pin, id):
        account = loop_dic(pin, id)
        send = int(input("Kimga yubormoqchisiz? ID raqamini kiriting:"))
        user = check_id(send)
        money = int(input("qancha summa o'tkazmoqchisiz? "))
        if money > account["balance"]:
            print("Xisobingizda mablag' yetarli emas!")
        else:
            account["balance"] -= money + money/100
            user["balance"] += money
            print("Pul o'tkazildi.")
    
    def paynet(pin, id):
        account = loop_dic(pin, id)
        pay = int(input("Kartangizga qancha miqdorda pul o'tkazmoqchisiz? "))
        account["balance"] += pay
        print("Xisobingiz muvafaqiyatli to'ldirildi!")
    
    main()"""`
    bot.sendMessage(chatId,'Pythonda bankomat kodi')
    bot.sendMessage(chatId, '```javascript\n' + bankomatpy + '\n```', {parse_mode: 'Markdown'});
})


bot.onText(/\/sennimaqilasan/,(msg)=>{
    const chatId=msg.chat.id
    bot.sendMessage(chatId,'sizga men kodlar beraman kerakmi ? ')
})
bot.onText(/shaftolibomi/,(msg)=>{
    const chatId=msg.chat.id
    bot.sendMessage(chatId,`****bor`)
})
bot.onText(/(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1];
    const reversedMessage = userInput.split('').reverse().join('');
    bot.sendMessage(chatId, reversedMessage);
});