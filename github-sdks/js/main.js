const { Octokit, App } = require("octokit");

console.log(`TOKEN: ${process.env.GH_TOKEN}`)

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'Mohannad1Emhemed',
    repo: 'Github-Examples',
    ref: 'refs/heads/sdksjs',
    sha: 'b7e29a0e0c27b8654e518655bdbb10e9b8a764d7',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })