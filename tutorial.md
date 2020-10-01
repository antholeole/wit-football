# Beginner Tutorial: Create a Football Info Hub With Natural Language Queries Using React and Wit.ai

This tutorial will show you how to use wit.ai to add incredible natural language processing to your project. We're going to allow a user to write google-like queries about football (soccer) and get the answer!

## What is wit.ai, and why should we use it?

For humans like me and you, we can make sentences like:

> 1. How many players are on the New England Revolution?
> 2. What is the count of players on the New England Revolution?
> 3. On the New England Revolution, how many players are there?

And know that the *intent* of the question is return the value of: `teams["New England Revolution"].players.length.` For a program, though, parsing that query that would be pretty hard. Sure, we can take that sentence and check if it contains the string "New England Revolution," but how will we know that we're asking for the player count? If we check for `sentence.includes('count'),` then the third or first wouldn't process correctly. If we do `sentence.includes('count') || sentence.includes('how many'),` then a query like "How many goals does Manchester United score on average per game?" would give you the player count. 

> You could get more and more specific with your `sentence.includes()` statements, but even a novice
> programmer can tell that we can very quickly get messy, branching code.

Instead, we can just have wit.ai parse that request and put it in a format that a computer can easily understand:

```
{
    "text": "How many players are on the New England Revolution?",
    "intents": [
        {
        "name": "player_count"
        }
    ],
    "entities": {
        "teams:teams": [
            {
                "name": "New England Revolution"
            }
        ]
    }
}

```

In this way, all three of the questions would return the New England Revolution's player count. It would be possible to run `teams[json.entities["teams:teams"][0].name][json.intents[0].name]` and get the player count, regardless of the team or the exact language used.

## What will this tutorial go over?

- why we should use wit.ai (Check!)
- How we can use wit.ai
- Some of the awesome features of wit.ai

After you're done with this tutorial, we'll have used the power of wit.ai to translate human texts into statements computers understand. Here are the scenario's we'll cover:

1. How many players are on <team>? (Respond with the player count of <team>)
2. When did the 2018 season start? (Respond with the start date of the 2018 season)
3. There were 15 players on <team> in 2018. (Respond with TRUE or FALSE and real player count if false)

We'll only be loading in data from one team (The New England Revolutions!), but the data is straight from [API-Football](https://www.api-football.com/), so feel free to extend the app to accept more teams!

### Presequites 

I'm going to assume that you are: 

- A beginner to wit.ai. I'll be explaining all the basics of wit.ai, so if you're new, you're in the right place.

- A intermediate programmer. I'll expect you to know basic programming techniques, like flow control, functions, and variables.

- have node installed on your computer

- you do NOT need to know any React. I already built a whole React app for you. All you have to do is `git pull` it :) 

## Step 1: Running the project initially

I've already created somewhat of a scaffold for you, so we can quickly start coding. All you have to do is pull the project by running the following commands in the terminal.

```
TODO INSERT COMMAND HERE
```

and then run 

```
npm start
```

And the project should be open.

TODO INSERT IMAGE ONE HERE

I've already covered a lot of the basics of setting up the project for you.

- I've gotten some fixtures from a [football api](https://rapidapi.com/blog/api-football-python/
). In a real application, you'll probably be calling the API directly from the app, but to keep this focused, we'll instead be using data stored directly in the app itself.  

- I've set up a **typescript** React environment. This includes [eslint](https://eslint.org/) and some libraries to help us move a bit faster.

> If you're not familiar with Typescript (TS), it might be comforting to hear that it's just a flavor of Javascript (JS). Programmers like when things are boring, and TS is only JS in a more strict environment, so we can write some more predictable code. I'll give some examples further in the tutorial of why I prefer TS over JS. If you've used a statically typed programming language before, TS is super easy to learn.

You'll see that when you enter a question in the box, nothing will happen! That's because we're not hooked up to the wit.ai API yet, so let's get that started. Head over to [wit.ai](wit.ai) and log in with your Facebook account. You'll be greeted with a friendly-looking UI.

TODO INSERT IMAGE OF WIT.AI

Click on the "New App" button in the corner to get the new app started. Name it whatever you want, and make sure to selecEnglishish language" if you're going to follow this tutorial.

After you're done with that modal, you'll be greeted with a page with a lot of words you probably don't understand yet :) Don't worry, I'll be going through every aspect of wit.ai - you'll quickly become a Wit pro.

TODO INSERT IMAGE OF WIT PROJECT

First, on the left side of your screen, under the **Management** tab, click on the "*settings*" link. There, you'll see your app ID and a bunch of other information. What we're after is the Access Token - specifically, the Client Access Token. Click "Generate new token" next to Client Access Token.

> An access token authenticates us into the project, allowing us to call the API. A third party should **never** get ahold of your server access token. This will enable them to perform many breaking changes to your project, like edit your intents, entities, and traits. A client access token only has *read* rights, so it's safe to give it straight to a client. 

In `src/constants/api_keys.ts,` paste your key into the `WIT_CLIENT_API_KEY` variable.

## using Wit.ai

### Intents

The first part of wit.ai that we'll explore will be the Intents. Think of an **intent** as "the reason you're making the request." For instance, in the earlier example of "how many players are on the team?" The "reason" would be to get the player count. That's what we'll call our intent: "Player Count"! 

Under the same "management" dropdown, click on the "Intent" link. Then, click on the blue "Add intent" in the top right corner. Name the intent "Player Count." You'll see that not much happened, but when you click on the "intents" link under the management dropdown again, you'll see our new intent!

Head over to the "understanding" tab above the management tab. In the utterances box, type "How many players are there on the New England Revolution?" and then right below that, select the intent we just created from the dropdown. Click "train and validate" down below. 

While we wait for our training to complete, let's talk a little bit about what we just did.

An "Utterance" is a snippet of text that gets inputted into our app, either the way you just did (through the "utterance" tab) or through the search box in our football wit's UI. wit.ai knows absolutely nothing about our player count intent, so it doesn't even try to guess when we make it. Now that we started training, it has some data to base new requests off of. 

Go back to the utterance box and type "How many people are on the soccer team?". Now, wit.ai correctly guesses that we're asking about the player count! If we input those examples from earlier, Wit guesses the intent correctly for all of them. This isn't that impressive since we only have one "intent," so let's add another.

Another question we'll answer with our app is, "When did the MLS start in (YEAR)?". Head over to intents and add the "League Start" intent. 

TODO INSERT GIF OF LEAGUE START INTENT

Now go back to utterances. Type "When did the MLS start in 2018?" You'll see that Wit incorrectly guesses the intent, so we can change that guess. Change it to "League Start" and train it.

> Usually, we want to train the AI until it gets pretty good at guessing the intent. You should take four or five minutes to type in as many ways you can think of asking those questions, and training the AI a little bit. You'll see that pretty quickly, Wit gets freaky good at guessing the intent.

### Entities

Okay, so we know that intents are the "reason" for making the request, but what about the subject? That's where the entities come in. Think of an entity as an object. In this case, it'll be soccer teams. 

The same way we created entities create a new "Team" Entity. You'll see that it asks you if you want it to be free text, keyword, or both. 

TODO INSERT IMAGE HERE

If you choose "free text," Wit will try to infer the entity, just like it did with the intent. If you select "keyword," Wit will essentially do a `.includes(ENTITY),` but can infer through typos and other small changes. In our case, we'll do keyword, but keyword & free text can work pretty well here too.

After you create the entity, in the "keyword and synonyms" section, add a new keyword named "New England Revolution." That's pretty wordy, though, and I like to call them the Revs - so let's add a synonym to the entity and name it "Revs." Now, Wit will look for "Rev" or "New England Revolution." If

> If you decide you want to extend the app into more teams, just add the team name into the "Keyword" part just like we just did. Do this for every team you want to add.

> If you go back in the utterances tab and type a sentence that includes the word "Rev," Wit will pick it up and show you that the entity is the Revs. Pretty cool, right? 

We also want to add one more entity: the wit/datetime entity. This is so that when we want 2008, we'll have Wit tell us that we mean 2008, even if we type "08". Next, click "+ Entity", and instead of typing in an entity name, click on the "add built-in entity" checkbox and type "datetime." 

The last one we're going to want is the number entity. This is so that we can parse the "guess" out of the request. Go ahead and add that entity the same exact way we added the datetime entity.

> The "number" entity is another way that wit.ai saves us. If we were writing standard conditional logic, we wouldn't be able to tell if "2008" was a date or a guess! This way, after a little bit of training, we know that 2008 is a year, and "19" is the guess. 

> **IMPORTANT:** Only train "number" with queries that have the `Player_Count` intent! If you click on Entities in wit.ai, you'll see wit associates entities to intents. We don't want Wit to think that there'll be a number entity in `Start_Date` intent.

Wit.ai provides us with an extensive library of pre-provided entities and traits. For this tutorial, we'll only be using the datetime entity. Still, I encourage you to look through them - it really is an extensive (and well trained!) library. 

### Traits

Finally, we have "traits." Traits are something that can't accurately be described in one word, but if I had to pick one, it'd be "Traits" :). 

Traits are "hidden messages" in text. It's not the reason or the subject, but it sure is in the utterance. These are generally easy for humans to pick up on, but incredibly difficult for robots. The pre-trained library of traits will be pretty helpful for understanding them. 

One functionality we'll be including in the app is a "Fact checker." Maybe I type "There were 15 players on the Revs in 2018". That's incorrect, so we want our app to say "WRONG! there are TODO: INSERT NUMBER," but we don't want to yell "WRONG!" at people who are just asking questions! So we'll create a trait called "sentence type."  

> *NOTE*: We'll only tell the user if they're guess was right or wrong for the player count intent. 

When you create the trait, in the "values" section, type in "statement" and "question." We need to train the model here - as I said, this is pretty hard for a computer to understand. Click on "utterances" once again.

> Don't feel like you can't repeat yourself - try to vary your lines when training, but there's no penalty if you repeat yourself. Make sure to spend some time here training the traits model!

The list of sentences from prior should all return the same exact set of attributes: `Question` trait, `rev` entity, `player count` intent. It's much easier to parse that then the sentence itself. So let's parse it!  

## Back to the Football Wit

When you submit a request through the app, the function called is `callWitApi` in `services/wit/api_call.ts.` I already wrote this function for you - woohoo! 

INSERT FUNCTION API CALL IMAGE HERE

Let's take a look at it, so we know what's going on.

One of the most popular endpoints you'll be calling will be the `api.wit.ai/message?v={MESSAGE}` GET endpoint (or the POST speech endpoint, if your app is speech to text). This endpoint will provide you with the response that contains the entity, traits, and intents that we just created. Let's try it out.

```
$ curl -XGET 'https://api.wit.ai/message?v=20200513&q=how%20many%20players%20are%20on%20the%20revs&20in%202008' \
-H "Authorization: Bearer $TOKEN"
```

Where `$TOKEN` is our client API key.  You should get a response like this: 

```
{
    "text": "How many players are on the revs in 2008?",
    "intents": [
        {
            "id": "353563592669133",
            "name": "Player_Count",
            "confidence": 0.9971
        }
    ],
    "entities": {
        "wit$datetime:datetime": [
            {
                "id": "3572605356212011",
                "name": "wit$datetime",
                "role": "datetime",
                "start": 33,
                "end": 40,
                "body": "in 2008",
                "confidence": 1,
                "entities": [],
                "type": "value",
                "grain": "year",
                "value": "2008-01-01T00:00:00.000-08:00",
                "values": [
                    {
                        "type": "value",
                        "grain": "year",
                        "value": "2008-01-01T00:00:00.000-08:00"
                    }
                ]
            }
        ],
        "Team:Team": [
            {
                "id": "326439135304471",
                "name": "Team",
                "role": "Team",
                "start": 28,
                "end": 32,
                "body": "revs",
                "confidence": 1,
                "entities": [],
                "value": "New England Revolution",
                "type": "value"
            }
        ]
    },
    "traits": {
        "Sentence_Type": [
            {
                "id": "651419542478275",
                "value": "question",
                "confidence": 0.9995
            }
        ]
    }
}
```

All `callWitApi` does is call the wit API and return that response. That response gets passed to `parseWitCall.ts` in `services/wit/parse.ts.` That's the function that we'll write!

> If you named your entities, traits, or intents something different, make sure to update the interface in `service/wit/i_wit_response.ts` so that the interface complies with the response you got from the curl command above.

While we only have one team and two intents, we'll be using an easily extensible pattern to make it easier in the future to extend this app. 

First, let's write an easy one: Figure out if it's a question, or a sentence! If you remember, this is through the *trait* we added. Below parseWitCall, let's write a function with the signature `determineRequestType(IWitResponse): InputType`. In the method body, let's `switch` on the first trait's value. That value will either be "question" or "statement", and we'll return `InputType.question` or `InputType.statement` respectively. Let's not forget to add a default branch: We'll return "Question" as the default if wit doesn't determine a sentence type. Our final `determineRequestType` function should look like this:


```
function determineRequestType(response: IWitResponse): InputType {
    switch (response.traits.Sentence_Type[0].value) {
        case "question":
            return InputType.question
        case "statement":
            return InputType.statement
        default:
            return InputType.question
    }
}
```

The only way to get an error here is if we don't get a trait, so we should add a null aware to the `.Sentence_Type.` Now, we switch on `switch (response.traits?.Sentence_Type[0]?.value)` so that if we don't have a Sentence_Type, we'll default to the default branch.

So that's it! That's all it took, and now that function is complete. The rest of the parsing is a little different, but the same. We'll save that into a variable in the `parseWitCall` function.

For our example, we don't need to parse the team out of the entity because we only have the Revs data. If we needed to do that, here's what the code for that could have looked like:

```
switch (response.entities?.["Team:Team"][0]?.name) {
    case "New England Revolution":
        return <Some Enum>
}
```

> A bad programming practice is called "stringly typed." That means using strings excessively to compare values. That's not good because if a string gets mutated, all your equality checks down the line will fail, which is why we return an enum with a fixed value.

The other entity to parse is the datetime entity. Datetime is sent in ISO format, which is thankfully very easy to parse in TS/JS. Let's write a function that takes the response and returns the year. If the year is out of our data range, we should throw an error instead of giving the user the wrong data. If the user doesn't specify the year, we should just return the latest data.

```
function getYear(response: IWitResponse): number {
    if (!response.entities["wit$datetime:datetime"]) {
        return 2018
    }

    const entity = response.entities["wit$datetime:datetime"][0].value
    const year = (new Date(Date.parse(entity))).getFullYear()
    if (year > 2018) throw Error(Errors.outOfDataRange)
    return year
}
```

If this were a production application, you should take that name and send it to an API to get the desired data. Instead, we have the data hardcoded into a variable for the purpose of this tutorial. If you want to check it out, head over to `constants/football_api_responses/*.` those hold a lot of fixtures - we won't be using a lot of them, but imagine the possibilities of intents we could have here! 

First, let's provide the answer to the `Start_Date` intent. This function is going to need the year, and we'll return the real date. `function getStartDate(year: number): date`

The body of the function is going to iterate through the team's seasons. Because it's in chronological order, if we end up in an earlier year, we know we have the earliest date.

```

function getStartDate(year: number): Date {
    let earliestGame: Date = new Date(newEnglandRevolutionGames.fixtures[0].event_timestamp)
    newEnglandRevolutionGames.fixtures.every((game) => {
        const currDate = new Date(game.event_timestamp)

        if (currDate.getFullYear() < year) {
            return false
        }

        earliestGame = currDate
        return true
    })

    return earliestGame
}
```

Next, let's write the function for the other intent. This one gets the player count at a certain year, so it's as easy as iterating through the players and adding the name to a set (so we don't double count, if a player appeared in two different positions for the same year) then returning the size of the set. Here's the function:

```
function getPlayerCount(year: number): number {
    const playerNameSet: Set<string> = new Set()
    const yearStr = year.toString()
    newEnglandRevolutionPlayers.players.forEach(player => {
        if (player.season.includes(yearStr)) playerNameSet.add(player.player_name)
    })
    return playerNameSet.size
}
```

> Notice how we're checking if the season contains the year, instead of checking equality. That's because the API sometimes returns the "season" property as something like "2008-2009".

The last thing we need to parse out of the response is the guess. This is really easy, and we just check for that `number` entity that we added earlier. If it isn't there, we'll return undefined.

```
function getPlayerCountGuess(response: IWitResponse): number | undefined {
    return response.entities['wit$number:number'][0]?.value
}
```

> Easy. Concise. Beautiful. :) 

Last but not least, let's flesh out the parseWitCallFunction:

```
function parseWitCall(response: IWitResponse): IParsedWitResponse {
    if (response.intents.length < 1) {
        throw Error(Errors.badRequestError)
    }

    let requestType = determineRequestType(response)
    let guess: string | undefined
    let actual: string

    if (response.intents[0].name === "Player_Count") {
        if (requestType === InputType.question) {
            guess = getPlayerCountGuess(response)?.toString()
        }
        actual = getPlayerCount(getYear(response)).toString()
    } else {
        actual = getStartDate(getYear(response)).toString()
    }

    return {
        inputType: guess ? InputType.question : InputType.statement,
        correct: guess !== undefined && guess === actual,
        value: actual
    }
```

The first thing we do is check if we have an intent. If we don't, there's nothing we can do; we don't know what or how to answer! So we just throw an error.

You see that we set up the variables we're returning before hand, and then fill them out accordingly. We only return `InputType.question` if we have a guess, and the statement was a question. We only check for correct if we have a guess (we'll only have one if the input type is a question.)

And that's it! We're done. If you re-run the application, you'll see it working as intended. If the translation is off sometimes, all you need to do is go to the understanding pane in wit.ai and train the model some more.

TODO INSERT COMPLETED SCREENSHOT

# Conclusion

Our "parse" code file is less than 100 lines of code, and we were able to extract all of this from a sentence:

- The team that we were talking about
- The reason we were entering the text
- If it was a statement or a question
- What year we were talking about
- if we guessed on the player count
- If we guessed CORRECTLY on the player count

And we do it all safely! In case of an error or lack of info, we default correctly or throw errors when we can't recover. Wit.ai allowed us to create a safe, extensible application without worrying about every single way a human can ask something. 

Wit.ai is a powerful tool that allows us to use natural language processing to enable the user to "talk" to a computer, without worrying too much about their syntax. This helps provide a fluid user experience that doesn't feel like you're inputting commands into a machine.