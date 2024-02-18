require 'octokit'

client = Octokit::Client.new(access_token: ENV['GH_TOKEN'])

# Create the new branch
client.create_ref(
"Mohannad1Emhemed/Github-Examples", 
"heads/sdks", 
"b7e29a0e0c27b8654e518655bdbb10e9b8a764d7"
)