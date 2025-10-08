const { spawnSync, spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

const nextDir = path.join(__dirname, '.next')

function run(cmd, args, options = {}){
  const p = spawn(cmd, args, { stdio: 'inherit', shell: true, ...options })
  return new Promise((resolve, reject)=>{
    p.on('close', code => {
      if(code === 0) resolve()
      else reject(new Error(`${cmd} ${args.join(' ')} exited ${code}`))
    })
  })
}


(async ()=>{
  try{
    if(!fs.existsSync(nextDir)){
      console.log('.next not found — running `npm run build`')
      // run npm run build
      const bin = process.platform === 'win32' ? 'npm.cmd' : 'npm'
      spawnSync(bin, ['run','build'], { stdio: 'inherit' })
    }

    console.log('Starting next start -p 3000')
    // Start Next.js server in background
    const nextProc = spawn('npx', ['next', 'start', '-p', '3000'], { stdio: 'inherit', shell: true })

    // Wait a moment then open browser
    setTimeout(()=>{
      const url = 'http://localhost:3000'
      if(process.platform === 'win32'){
        spawn('start', [url], { shell: true, stdio: 'ignore' })
      }else if(process.platform === 'darwin'){
        spawn('open', [url], { shell: true, stdio: 'ignore' })
      }else{
        spawn('xdg-open', [url], { shell: true, stdio: 'ignore' })
      }
    }, 2500)

    nextProc.on('close', code => process.exit(code))
  }catch(err){
    console.error(err.message)
    process.exit(1)
  }
})()
