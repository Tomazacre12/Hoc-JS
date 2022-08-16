var player = [
    {
        name: 'Atoria Pendragon',
        atk: Math.round(Math.random() * 3000)
    },
    {
        name: 'Gilgamesh',
        atk: Math.round(Math.random() * 3000)

    },
    {
        name: 'Okita souji',
        atk: Math.round(Math.random() * 3000)

    }
]


var teamAtk = player.reduce(function(total,playeratk){
    console.table({
        'Player:':playeratk.name,
        'Atk:':playeratk.atk,
    })
    return total + playeratk.atk
},0)
console.log('TeamATK:'+teamAtk)

var bossHealth = Math.round(Math.random() * 10000)
console.log('BossHealth:'+bossHealth)

if(teamAtk - bossHealth >= 0){
    console.log('WIN')
} else{
    console.log('LOSE')
}

