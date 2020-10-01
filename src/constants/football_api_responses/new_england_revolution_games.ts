interface ITeamShort {
    team_id: number,
    team_name: string,
    logo: string
}

interface ITeamGames {
    results: number,
    fixtures: {
        fixture_id: number,
        league_id: number,
        league: {
            name: string,
            country: string,
            logo: string,
            flag: string
        },
        event_date: string,
        event_timestamp: number,
        firstHalfStart: number | null,
        secondHalfStart: number | null,
        round: string,
        status: string,
        statusShort: string,
        elapsed: number,
        venue: string,
        referee: null | string,
        homeTeam: ITeamShort,
        awayTeam: ITeamShort,
        goalsHomeTeam: number | null,
        goalsAwayTeam: number | null,
        score: {
            halftime: null | string,
            fulltime: null | string,
            extratime: null | string,
            penalty: null | string
        }
    }[]
}

const newEnglandRevolutionGames: ITeamGames = {
    "results": 315,
    "fixtures": [
        {
            "fixture_id": 492158,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-03-11T03:30:00+00:00",
            "event_timestamp": 1331436600,
            "firstHalfStart": 1331436600,
            "secondHalfStart": 1331440200,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Buck Shaw Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1596,
                "team_name": "San Jose Earthquakes",
                "logo": "https://media.api-sports.io/football/teams/1596.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492164,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-03-18T00:40:00+00:00",
            "event_timestamp": 1332031200,
            "firstHalfStart": 1332031200,
            "secondHalfStart": 1332034800,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "LIVESTRONG Sporting Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "2-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492174,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-03-24T20:08:00+00:00",
            "event_timestamp": 1332619680,
            "firstHalfStart": 1332619680,
            "secondHalfStart": 1332623280,
            "round": "Regular Season - 3",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1617,
                "team_name": "Portland Timbers",
                "logo": "https://media.api-sports.io/football/teams/1617.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492186,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-04-01T03:25:00+00:00",
            "event_timestamp": 1333250700,
            "firstHalfStart": 1333250700,
            "secondHalfStart": 1333254300,
            "round": "Regular Season - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "The Home Depot Center",
            "referee": null,
            "homeTeam": {
                "team_id": 1605,
                "team_name": "Los Angeles Galaxy",
                "logo": "https://media.api-sports.io/football/teams/1605.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-2",
                "fulltime": "1-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492190,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-04-06T00:38:00+00:00",
            "event_timestamp": 1333672680,
            "firstHalfStart": 1333672680,
            "secondHalfStart": 1333676280,
            "round": "Regular Season - 5",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "FC Dallas Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1597,
                "team_name": "FC Dallas",
                "logo": "https://media.api-sports.io/football/teams/1597.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492200,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-04-14T20:10:00+00:00",
            "event_timestamp": 1334434200,
            "firstHalfStart": 1334434200,
            "secondHalfStart": 1334437800,
            "round": "Regular Season - 6",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492219,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-04-28T19:55:00+00:00",
            "event_timestamp": 1335642900,
            "firstHalfStart": 1335642900,
            "secondHalfStart": 1335646500,
            "round": "Regular Season - 8",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Red Bull Arena",
            "referee": null,
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492227,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-05-03T00:08:00+00:00",
            "event_timestamp": 1336003680,
            "firstHalfStart": 1336003680,
            "secondHalfStart": 1336007280,
            "round": "Regular Season - 9",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1610,
                "team_name": "Colorado Rapids",
                "logo": "https://media.api-sports.io/football/teams/1610.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492236,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-05-06T01:08:00+00:00",
            "event_timestamp": 1336266480,
            "firstHalfStart": 1336266480,
            "secondHalfStart": 1336270080,
            "round": "Regular Season - 9",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Rio Tinto Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1606,
                "team_name": "Real Salt Lake",
                "logo": "https://media.api-sports.io/football/teams/1606.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492245,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-05-12T23:40:00+00:00",
            "event_timestamp": 1336866000,
            "firstHalfStart": 1336866000,
            "secondHalfStart": 1336869600,
            "round": "Regular Season - 10",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 8007,
                "team_name": "Whitecaps",
                "logo": "https://media.api-sports.io/football/teams/8007.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "3-1",
                "fulltime": "4-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492253,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-05-19T23:30:00+00:00",
            "event_timestamp": 1337470200,
            "firstHalfStart": 1337470200,
            "secondHalfStart": 1337473800,
            "round": "Regular Season - 11",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492268,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-05-26T23:30:00+00:00",
            "event_timestamp": 1338075000,
            "firstHalfStart": 1338075000,
            "secondHalfStart": 1338078600,
            "round": "Regular Season - 13",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Robert F. Kennedy Memorial Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "2-0",
                "fulltime": "3-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492726,
            "league_id": 2291,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-05-29T23:00:00+00:00",
            "event_timestamp": 1338332400,
            "firstHalfStart": 1338332400,
            "secondHalfStart": 1338336000,
            "round": "3rd Round",
            "status": "Match Finished",
            "statusShort": "PEN",
            "elapsed": 120,
            "venue": "Skyline Sports Complex",
            "referee": null,
            "homeTeam": {
                "team_id": 4023,
                "team_name": "Penn",
                "logo": "https://media.api-sports.io/football/teams/4023.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": "3-3",
                "penalty": "4-3"
            }
        },
        {
            "fixture_id": 492274,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-06-02T23:40:00+00:00",
            "event_timestamp": 1338680400,
            "firstHalfStart": 1338680400,
            "secondHalfStart": 1338684000,
            "round": "Regular Season - 13",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492278,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-06-16T23:45:00+00:00",
            "event_timestamp": 1339890300,
            "firstHalfStart": 1339890300,
            "secondHalfStart": 1339893900,
            "round": "Regular Season - 14",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492291,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-06-23T21:40:00+00:00",
            "event_timestamp": 1340487600,
            "firstHalfStart": 1340487600,
            "secondHalfStart": 1340491200,
            "round": "Regular Season - 15",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BMO Field",
            "referee": null,
            "homeTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "2-0",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492303,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-06-30T23:38:00+00:00",
            "event_timestamp": 1341099480,
            "firstHalfStart": 1341099480,
            "secondHalfStart": 1341103080,
            "round": "Regular Season - 16",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1595,
                "team_name": "Seattle Sounders",
                "logo": "https://media.api-sports.io/football/teams/1595.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-2",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492323,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-07-08T23:08:00+00:00",
            "event_timestamp": 1341788880,
            "firstHalfStart": 1341788880,
            "secondHalfStart": 1341792480,
            "round": "Regular Season - 18",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492328,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-07-14T23:40:00+00:00",
            "event_timestamp": 1342309200,
            "firstHalfStart": 1342309200,
            "secondHalfStart": 1342312800,
            "round": "Regular Season - 19",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492338,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-07-19T00:05:00+00:00",
            "event_timestamp": 1342656300,
            "firstHalfStart": 1342656300,
            "secondHalfStart": 1342659900,
            "round": "Regular Season - 20",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Stade Saputo",
            "referee": null,
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492344,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-07-22T00:38:00+00:00",
            "event_timestamp": 1342917480,
            "firstHalfStart": 1342917480,
            "secondHalfStart": 1342921080,
            "round": "Regular Season - 20",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "LIVESTRONG Sporting Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492358,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-07-29T23:25:00+00:00",
            "event_timestamp": 1343604300,
            "firstHalfStart": 1343604300,
            "secondHalfStart": 1343607900,
            "round": "Regular Season - 22",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "PPL Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492360,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-08-04T23:38:00+00:00",
            "event_timestamp": 1344123480,
            "firstHalfStart": 1344123480,
            "secondHalfStart": 1344127080,
            "round": "Regular Season - 22",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492373,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-08-12T23:00:00+00:00",
            "event_timestamp": 1344812400,
            "firstHalfStart": 1344812400,
            "secondHalfStart": 1344816000,
            "round": "Regular Season - 23",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492381,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-08-19T00:40:00+00:00",
            "event_timestamp": 1345336800,
            "firstHalfStart": 1345336800,
            "secondHalfStart": 1345340400,
            "round": "Regular Season - 24",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492391,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-08-25T23:40:00+00:00",
            "event_timestamp": 1345938000,
            "firstHalfStart": 1345938000,
            "secondHalfStart": 1345941600,
            "round": "Regular Season - 25",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Columbus Crew Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "3-2",
                "fulltime": "4-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492399,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-08-30T00:00:00+00:00",
            "event_timestamp": 1346284800,
            "firstHalfStart": 1346284800,
            "secondHalfStart": 1346288400,
            "round": "Regular Season - 26",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 13173,
                "team_name": "Chivas USA",
                "logo": "https://media.api-sports.io/football/teams/13173.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "3-2",
                "fulltime": "3-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492403,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-09-01T23:40:00+00:00",
            "event_timestamp": 1346542800,
            "firstHalfStart": 1346542800,
            "secondHalfStart": 1346546400,
            "round": "Regular Season - 26",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492410,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-09-06T00:10:00+00:00",
            "event_timestamp": 1346890200,
            "firstHalfStart": 1346890200,
            "secondHalfStart": 1346893800,
            "round": "Regular Season - 27",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492420,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-09-15T23:40:00+00:00",
            "event_timestamp": 1347752400,
            "firstHalfStart": 1347752400,
            "secondHalfStart": 1347756000,
            "round": "Regular Season - 28",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Robert F. Kennedy Memorial Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492429,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-09-22T23:38:00+00:00",
            "event_timestamp": 1348357080,
            "firstHalfStart": 1348357080,
            "secondHalfStart": 1348360680,
            "round": "Regular Season - 29",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492440,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-09-30T00:38:00+00:00",
            "event_timestamp": 1348965480,
            "firstHalfStart": 1348965480,
            "secondHalfStart": 1348969080,
            "round": "Regular Season - 30",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BBVA Compass Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492450,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-10-06T23:10:00+00:00",
            "event_timestamp": 1349565000,
            "firstHalfStart": 1349565000,
            "secondHalfStart": 1349568600,
            "round": "Regular Season - 31",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "PPL Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492461,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-10-20T23:40:00+00:00",
            "event_timestamp": 1350776400,
            "firstHalfStart": 1350776400,
            "secondHalfStart": 1350780000,
            "round": "Regular Season - 32",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492469,
            "league_id": 2287,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2012-10-27T18:10:00+00:00",
            "event_timestamp": 1351361400,
            "firstHalfStart": 1351361400,
            "secondHalfStart": 1351365000,
            "round": "Regular Season - 33",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Stade Saputo",
            "referee": null,
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491828,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-03-10T00:52:00+00:00",
            "event_timestamp": 1362876720,
            "firstHalfStart": 1362876720,
            "secondHalfStart": 1362880320,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491836,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-03-16T21:08:00+00:00",
            "event_timestamp": 1363468080,
            "firstHalfStart": 1363468080,
            "secondHalfStart": 1363471680,
            "round": "Regular Season - 3",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "PPL Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491843,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-03-23T20:15:00+00:00",
            "event_timestamp": 1364069700,
            "firstHalfStart": 1364069700,
            "secondHalfStart": 1364073300,
            "round": "Regular Season - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491852,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-03-30T20:10:00+00:00",
            "event_timestamp": 1364674200,
            "firstHalfStart": 1364674200,
            "secondHalfStart": 1364677800,
            "round": "Regular Season - 5",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1597,
                "team_name": "FC Dallas",
                "logo": "https://media.api-sports.io/football/teams/1597.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491866,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-04-13T20:10:00+00:00",
            "event_timestamp": 1365883800,
            "firstHalfStart": 1365883800,
            "secondHalfStart": 1365887400,
            "round": "Regular Season - 6",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "CenturyLink Field",
            "referee": null,
            "homeTeam": {
                "team_id": 1595,
                "team_name": "Seattle Sounders",
                "logo": "https://media.api-sports.io/football/teams/1595.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491877,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-04-20T23:08:00+00:00",
            "event_timestamp": 1366499280,
            "firstHalfStart": 1366499280,
            "secondHalfStart": 1366502880,
            "round": "Regular Season - 7",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Red Bull Arena",
            "referee": null,
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-1",
                "fulltime": "4-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491887,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-04-27T23:30:00+00:00",
            "event_timestamp": 1367105400,
            "firstHalfStart": 1367105400,
            "secondHalfStart": 1367109000,
            "round": "Regular Season - 8",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491893,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-05-03T02:30:00+00:00",
            "event_timestamp": 1367548200,
            "firstHalfStart": 1367548200,
            "secondHalfStart": 1367551800,
            "round": "Regular Season - 9",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "JELD-WEN Field",
            "referee": null,
            "homeTeam": {
                "team_id": 1617,
                "team_name": "Portland Timbers",
                "logo": "https://media.api-sports.io/football/teams/1617.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491903,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-05-09T00:00:00+00:00",
            "event_timestamp": 1368057600,
            "firstHalfStart": 1368057600,
            "secondHalfStart": 1368061200,
            "round": "Regular Season - 10",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1606,
                "team_name": "Real Salt Lake",
                "logo": "https://media.api-sports.io/football/teams/1606.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491912,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-05-11T23:30:00+00:00",
            "event_timestamp": 1368315000,
            "firstHalfStart": 1368315000,
            "secondHalfStart": 1368318600,
            "round": "Regular Season - 11",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491920,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-05-19T00:30:00+00:00",
            "event_timestamp": 1368923400,
            "firstHalfStart": 1368923400,
            "secondHalfStart": 1368927000,
            "round": "Regular Season - 12",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BBVA Compass Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491928,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-05-25T23:30:00+00:00",
            "event_timestamp": 1369524600,
            "firstHalfStart": 1369524600,
            "secondHalfStart": 1369528200,
            "round": "Regular Season - 12",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492664,
            "league_id": 2290,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-05-28T23:35:00+00:00",
            "event_timestamp": 1369784100,
            "firstHalfStart": 1369784100,
            "secondHalfStart": 1369787700,
            "round": "3rd Round",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Sahlen's Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 4027,
                "team_name": "Rochester Rhinos",
                "logo": "https://media.api-sports.io/football/teams/4027.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 5,
            "score": {
                "halftime": "0-1",
                "fulltime": "1-5",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491942,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-06-02T20:30:00+00:00",
            "event_timestamp": 1370205000,
            "firstHalfStart": 1370205000,
            "secondHalfStart": 1370208600,
            "round": "Regular Season - 14",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1605,
                "team_name": "Los Angeles Galaxy",
                "logo": "https://media.api-sports.io/football/teams/1605.png"
            },
            "goalsHomeTeam": 5,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "5-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491945,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-06-08T23:30:00+00:00",
            "event_timestamp": 1370734200,
            "firstHalfStart": 1370734200,
            "secondHalfStart": 1370737800,
            "round": "Regular Season - 14",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492653,
            "league_id": 2290,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-06-12T23:30:00+00:00",
            "event_timestamp": 1371079800,
            "firstHalfStart": 1371079800,
            "secondHalfStart": 1371083400,
            "round": "4th Round",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Soldiers Field Soccer Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "2-1",
                "fulltime": "4-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491953,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-06-16T02:00:00+00:00",
            "event_timestamp": 1371348000,
            "firstHalfStart": 1371348000,
            "secondHalfStart": 1371351600,
            "round": "Regular Season - 15",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BC Place Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 8007,
                "team_name": "Whitecaps",
                "logo": "https://media.api-sports.io/football/teams/8007.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "3-2",
                "fulltime": "4-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492644,
            "league_id": 2290,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-06-26T23:00:00+00:00",
            "event_timestamp": 1372287600,
            "firstHalfStart": 1372287600,
            "secondHalfStart": 1372291200,
            "round": "Quarter-finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Maryland SoccerPlex",
            "referee": null,
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491971,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-06-30T02:30:00+00:00",
            "event_timestamp": 1372559400,
            "firstHalfStart": 1372559400,
            "secondHalfStart": 1372563000,
            "round": "Regular Season - 17",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Stubhub Center",
            "referee": null,
            "homeTeam": {
                "team_id": 13173,
                "team_name": "Chivas USA",
                "logo": "https://media.api-sports.io/football/teams/13173.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491982,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-07-06T23:30:00+00:00",
            "event_timestamp": 1373153400,
            "firstHalfStart": 1373153400,
            "secondHalfStart": 1373157000,
            "round": "Regular Season - 18",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1596,
                "team_name": "San Jose Earthquakes",
                "logo": "https://media.api-sports.io/football/teams/1596.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491992,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-07-13T23:30:00+00:00",
            "event_timestamp": 1373758200,
            "firstHalfStart": 1373758200,
            "secondHalfStart": 1373761800,
            "round": "Regular Season - 19",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491998,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-07-18T01:00:00+00:00",
            "event_timestamp": 1374109200,
            "firstHalfStart": 1374109200,
            "secondHalfStart": 1374112800,
            "round": "Regular Season - 19",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Dick's Sporting Goods Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1610,
                "team_name": "Colorado Rapids",
                "logo": "https://media.api-sports.io/football/teams/1610.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492004,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-07-20T23:30:00+00:00",
            "event_timestamp": 1374363000,
            "firstHalfStart": 1374363000,
            "secondHalfStart": 1374366600,
            "round": "Regular Season - 20",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Columbus Crew Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492010,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-07-27T23:00:00+00:00",
            "event_timestamp": 1374966000,
            "firstHalfStart": 1374966000,
            "secondHalfStart": 1374969600,
            "round": "Regular Season - 21",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Robert F. Kennedy Memorial Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492025,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-08-04T23:30:00+00:00",
            "event_timestamp": 1375659000,
            "firstHalfStart": 1375659000,
            "secondHalfStart": 1375662600,
            "round": "Regular Season - 22",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492030,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-08-11T00:30:00+00:00",
            "event_timestamp": 1376181000,
            "firstHalfStart": 1376181000,
            "secondHalfStart": 1376184600,
            "round": "Regular Season - 23",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Sporting Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492036,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-08-17T23:30:00+00:00",
            "event_timestamp": 1376782200,
            "firstHalfStart": 1376782200,
            "secondHalfStart": 1376785800,
            "round": "Regular Season - 23",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492053,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-08-25T23:30:00+00:00",
            "event_timestamp": 1377473400,
            "firstHalfStart": 1377473400,
            "secondHalfStart": 1377477000,
            "round": "Regular Season - 25",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 5,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "5-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492055,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-08-30T23:00:00+00:00",
            "event_timestamp": 1377903600,
            "firstHalfStart": 1377903600,
            "secondHalfStart": 1377907200,
            "round": "Regular Season - 25",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BMO Field",
            "referee": null,
            "homeTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492072,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-09-08T23:30:00+00:00",
            "event_timestamp": 1378683000,
            "firstHalfStart": 1378683000,
            "secondHalfStart": 1378686600,
            "round": "Regular Season - 27",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 4,
            "score": {
                "halftime": "1-3",
                "fulltime": "2-4",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492081,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-09-15T00:30:00+00:00",
            "event_timestamp": 1379205000,
            "firstHalfStart": 1379205000,
            "secondHalfStart": 1379208600,
            "round": "Regular Season - 28",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-2",
                "fulltime": "3-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492089,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-09-21T23:30:00+00:00",
            "event_timestamp": 1379806200,
            "firstHalfStart": 1379806200,
            "secondHalfStart": 1379809800,
            "round": "Regular Season - 29",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492097,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-09-28T23:30:00+00:00",
            "event_timestamp": 1380411000,
            "firstHalfStart": 1380411000,
            "secondHalfStart": 1380414600,
            "round": "Regular Season - 29",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492105,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-10-05T23:00:00+00:00",
            "event_timestamp": 1381014000,
            "firstHalfStart": 1381014000,
            "secondHalfStart": 1381017600,
            "round": "Regular Season - 30",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Red Bull Arena",
            "referee": null,
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492115,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-10-12T18:30:00+00:00",
            "event_timestamp": 1381602600,
            "firstHalfStart": 1381602600,
            "secondHalfStart": 1381606200,
            "round": "Regular Season - 31",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Stade Saputo",
            "referee": null,
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492124,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-10-19T23:30:00+00:00",
            "event_timestamp": 1382225400,
            "firstHalfStart": 1382225400,
            "secondHalfStart": 1382229000,
            "round": "Regular Season - 32",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492135,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-10-27T20:00:00+00:00",
            "event_timestamp": 1382904000,
            "firstHalfStart": 1382904000,
            "secondHalfStart": 1382907600,
            "round": "Regular Season - 33",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Columbus Crew Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491806,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-11-03T00:00:00+00:00",
            "event_timestamp": 1383436800,
            "firstHalfStart": 1383436800,
            "secondHalfStart": 1383440400,
            "round": "MLS Cup - Conference Semi-finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491807,
            "league_id": 2286,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2013-11-07T02:00:00+00:00",
            "event_timestamp": 1383789600,
            "firstHalfStart": 1383789600,
            "secondHalfStart": 1383793200,
            "round": "MLS Cup - Conference Semi-finals",
            "status": "Match Finished",
            "statusShort": "AET",
            "elapsed": 120,
            "venue": "Sporting Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-1",
                "extratime": "3-1",
                "penalty": null
            }
        },
        {
            "fixture_id": 491482,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-03-09T01:30:00+00:00",
            "event_timestamp": 1394328600,
            "firstHalfStart": 1394328600,
            "secondHalfStart": 1394332200,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BBVA Compass Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "3-0",
                "fulltime": "4-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491487,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-03-15T20:00:00+00:00",
            "event_timestamp": 1394913600,
            "firstHalfStart": 1394913600,
            "secondHalfStart": 1394917200,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "PPL Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491494,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-03-22T18:00:00+00:00",
            "event_timestamp": 1395511200,
            "firstHalfStart": 1395511200,
            "secondHalfStart": 1395514800,
            "round": "Regular Season - 3",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 8007,
                "team_name": "Whitecaps",
                "logo": "https://media.api-sports.io/football/teams/8007.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491510,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-03-30T03:30:00+00:00",
            "event_timestamp": 1396150200,
            "firstHalfStart": 1396150200,
            "secondHalfStart": 1396153800,
            "round": "Regular Season - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Buck Shaw Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1596,
                "team_name": "San Jose Earthquakes",
                "logo": "https://media.api-sports.io/football/teams/1596.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491517,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-04-05T23:00:00+00:00",
            "event_timestamp": 1396738800,
            "firstHalfStart": 1396738800,
            "secondHalfStart": 1396742400,
            "round": "Regular Season - 5",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Robert F. Kennedy Memorial Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491524,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-04-12T21:00:00+00:00",
            "event_timestamp": 1397336400,
            "firstHalfStart": 1397336400,
            "secondHalfStart": 1397340000,
            "round": "Regular Season - 6",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491531,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-04-19T20:00:00+00:00",
            "event_timestamp": 1397937600,
            "firstHalfStart": 1397937600,
            "secondHalfStart": 1397941200,
            "round": "Regular Season - 7",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491545,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-04-26T23:30:00+00:00",
            "event_timestamp": 1398555000,
            "firstHalfStart": 1398555000,
            "secondHalfStart": 1398558600,
            "round": "Regular Season - 8",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491549,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-05-03T17:00:00+00:00",
            "event_timestamp": 1399136400,
            "firstHalfStart": 1399136400,
            "secondHalfStart": 1399140000,
            "round": "Regular Season - 8",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BMO Field",
            "referee": null,
            "homeTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491568,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-05-11T22:00:00+00:00",
            "event_timestamp": 1399845600,
            "firstHalfStart": 1399845600,
            "secondHalfStart": 1399849200,
            "round": "Regular Season - 10",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1595,
                "team_name": "Seattle Sounders",
                "logo": "https://media.api-sports.io/football/teams/1595.png"
            },
            "goalsHomeTeam": 5,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "4-0",
                "fulltime": "5-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491573,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-05-17T23:00:00+00:00",
            "event_timestamp": 1400367600,
            "firstHalfStart": 1400367600,
            "secondHalfStart": 1400371200,
            "round": "Regular Season - 11",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "PPL Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 5,
            "score": {
                "halftime": "1-2",
                "fulltime": "3-5",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491585,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-05-24T23:30:00+00:00",
            "event_timestamp": 1400974200,
            "firstHalfStart": 1400974200,
            "secondHalfStart": 1400977800,
            "round": "Regular Season - 12",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491596,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-05-31T23:00:00+00:00",
            "event_timestamp": 1401577200,
            "firstHalfStart": 1401577200,
            "secondHalfStart": 1401580800,
            "round": "Regular Season - 13",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Stade Saputo",
            "referee": null,
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "2-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491611,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-06-08T21:00:00+00:00",
            "event_timestamp": 1402261200,
            "firstHalfStart": 1402261200,
            "secondHalfStart": 1402264800,
            "round": "Regular Season - 15",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492591,
            "league_id": 2289,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-06-18T23:00:00+00:00",
            "event_timestamp": 1403132400,
            "firstHalfStart": 1403132400,
            "secondHalfStart": 1403136000,
            "round": "4th Round",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "City Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 4024,
                "team_name": "Richmond Kickers",
                "logo": "https://media.api-sports.io/football/teams/4024.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "1-3",
                "fulltime": "2-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492578,
            "league_id": 2289,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-06-25T23:30:00+00:00",
            "event_timestamp": 1403739000,
            "firstHalfStart": 1403739000,
            "secondHalfStart": 1403742600,
            "round": "5th Round",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Stevenson Field",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 4027,
                "team_name": "Rochester Rhinos",
                "logo": "https://media.api-sports.io/football/teams/4027.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491619,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-06-28T23:30:00+00:00",
            "event_timestamp": 1403998200,
            "firstHalfStart": 1403998200,
            "secondHalfStart": 1404001800,
            "round": "Regular Season - 15",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-1",
                "fulltime": "1-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491630,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-07-05T02:00:00+00:00",
            "event_timestamp": 1404525600,
            "firstHalfStart": 1404525600,
            "secondHalfStart": 1404529200,
            "round": "Regular Season - 16",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Rio Tinto Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1606,
                "team_name": "Real Salt Lake",
                "logo": "https://media.api-sports.io/football/teams/1606.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492565,
            "league_id": 2289,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-07-08T23:00:00+00:00",
            "event_timestamp": 1404860400,
            "firstHalfStart": 1404860400,
            "secondHalfStart": 1404864000,
            "round": "Quarter-finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "PPL Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491640,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-07-12T23:30:00+00:00",
            "event_timestamp": 1405207800,
            "firstHalfStart": 1405207800,
            "secondHalfStart": 1405211400,
            "round": "Regular Season - 17",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491648,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-07-17T02:30:00+00:00",
            "event_timestamp": 1405564200,
            "firstHalfStart": 1405564200,
            "secondHalfStart": 1405567800,
            "round": "Regular Season - 18",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Stubhub Center",
            "referee": null,
            "homeTeam": {
                "team_id": 1605,
                "team_name": "Los Angeles Galaxy",
                "logo": "https://media.api-sports.io/football/teams/1605.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 5,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-1",
                "fulltime": "5-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491654,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-07-20T01:00:00+00:00",
            "event_timestamp": 1405818000,
            "firstHalfStart": 1405818000,
            "secondHalfStart": 1405821600,
            "round": "Regular Season - 19",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1597,
                "team_name": "FC Dallas",
                "logo": "https://media.api-sports.io/football/teams/1597.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491662,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-07-26T23:30:00+00:00",
            "event_timestamp": 1406417400,
            "firstHalfStart": 1406417400,
            "secondHalfStart": 1406421000,
            "round": "Regular Season - 20",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491667,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-07-30T23:30:00+00:00",
            "event_timestamp": 1406763000,
            "firstHalfStart": 1406763000,
            "secondHalfStart": 1406766600,
            "round": "Regular Season - 20",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1610,
                "team_name": "Colorado Rapids",
                "logo": "https://media.api-sports.io/football/teams/1610.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491673,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-08-02T23:00:00+00:00",
            "event_timestamp": 1407020400,
            "firstHalfStart": 1407020400,
            "secondHalfStart": 1407024000,
            "round": "Regular Season - 21",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Red Bull Arena",
            "referee": null,
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491692,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-08-16T23:30:00+00:00",
            "event_timestamp": 1408231800,
            "firstHalfStart": 1408231800,
            "secondHalfStart": 1408235400,
            "round": "Regular Season - 23",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1617,
                "team_name": "Portland Timbers",
                "logo": "https://media.api-sports.io/football/teams/1617.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491703,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-08-23T23:30:00+00:00",
            "event_timestamp": 1408836600,
            "firstHalfStart": 1408836600,
            "secondHalfStart": 1408840200,
            "round": "Regular Season - 24",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 13173,
                "team_name": "Chivas USA",
                "logo": "https://media.api-sports.io/football/teams/13173.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491711,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-08-30T21:00:00+00:00",
            "event_timestamp": 1409432400,
            "firstHalfStart": 1409432400,
            "secondHalfStart": 1409436000,
            "round": "Regular Season - 25",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BMO Field",
            "referee": null,
            "homeTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-2",
                "fulltime": "0-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491719,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-09-03T23:30:00+00:00",
            "event_timestamp": 1409787000,
            "firstHalfStart": 1409787000,
            "secondHalfStart": 1409790600,
            "round": "Regular Season - 25",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491729,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-09-07T23:00:00+00:00",
            "event_timestamp": 1410130800,
            "firstHalfStart": 1410130800,
            "secondHalfStart": 1410134400,
            "round": "Regular Season - 26",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491736,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-09-13T23:30:00+00:00",
            "event_timestamp": 1410651000,
            "firstHalfStart": 1410651000,
            "secondHalfStart": 1410654600,
            "round": "Regular Season - 27",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491747,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-09-20T23:30:00+00:00",
            "event_timestamp": 1411255800,
            "firstHalfStart": 1411255800,
            "secondHalfStart": 1411259400,
            "round": "Regular Season - 28",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Columbus Crew Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491752,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-09-27T00:00:00+00:00",
            "event_timestamp": 1411776000,
            "firstHalfStart": 1411776000,
            "secondHalfStart": 1411779600,
            "round": "Regular Season - 29",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Sporting Park",
            "referee": null,
            "homeTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-2",
                "fulltime": "2-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491765,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-10-04T23:30:00+00:00",
            "event_timestamp": 1412465400,
            "firstHalfStart": 1412465400,
            "secondHalfStart": 1412469000,
            "round": "Regular Season - 30",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491775,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-10-11T20:00:00+00:00",
            "event_timestamp": 1413057600,
            "firstHalfStart": 1413057600,
            "secondHalfStart": 1413061200,
            "round": "Regular Season - 31",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Stade Saputo",
            "referee": null,
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "2-1",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491782,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-10-17T00:00:00+00:00",
            "event_timestamp": 1413504000,
            "firstHalfStart": 1413504000,
            "secondHalfStart": 1413507600,
            "round": "Regular Season - 32",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BBVA Compass Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491795,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-10-25T23:30:00+00:00",
            "event_timestamp": 1414279800,
            "firstHalfStart": 1414279800,
            "secondHalfStart": 1414283400,
            "round": "Regular Season - 33",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491468,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-11-01T20:00:00+00:00",
            "event_timestamp": 1414872000,
            "firstHalfStart": 1414872000,
            "secondHalfStart": 1414875600,
            "round": "MLS Cup - Conference Semi-finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Columbus Crew Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 4,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-4",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491469,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-11-09T22:00:00+00:00",
            "event_timestamp": 1415570400,
            "firstHalfStart": 1415570400,
            "secondHalfStart": 1415574000,
            "round": "MLS Cup - Conference Semi-finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491464,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-11-23T18:30:00+00:00",
            "event_timestamp": 1416767400,
            "firstHalfStart": 1416767400,
            "secondHalfStart": 1416771000,
            "round": "MLS Cup - Conference Finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Red Bull Arena",
            "referee": null,
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491465,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-11-29T20:00:00+00:00",
            "event_timestamp": 1417291200,
            "firstHalfStart": 1417291200,
            "secondHalfStart": 1417294800,
            "round": "MLS Cup - Conference Finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491463,
            "league_id": 2285,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2014-12-07T20:00:00+00:00",
            "event_timestamp": 1417982400,
            "firstHalfStart": 1417982400,
            "secondHalfStart": 1417986000,
            "round": "MLS Cup - Final",
            "status": "Match Finished",
            "statusShort": "AET",
            "elapsed": 120,
            "venue": "Stubhub Center",
            "referee": null,
            "homeTeam": {
                "team_id": 1605,
                "team_name": "Los Angeles Galaxy",
                "logo": "https://media.api-sports.io/football/teams/1605.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": "2-1",
                "penalty": null
            }
        },
        {
            "fixture_id": 491132,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-03-09T01:30:00+00:00",
            "event_timestamp": 1425864600,
            "firstHalfStart": 1425864600,
            "secondHalfStart": 1425868200,
            "round": "Regular Season - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "CenturyLink Field",
            "referee": "Villarrea Armando, USA",
            "homeTeam": {
                "team_id": 1595,
                "team_name": "Seattle Sounders",
                "logo": "https://media.api-sports.io/football/teams/1595.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "2-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491139,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-03-15T21:00:00+00:00",
            "event_timestamp": 1426453200,
            "firstHalfStart": 1426453200,
            "secondHalfStart": 1426456800,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Yankee Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491141,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-03-21T19:00:00+00:00",
            "event_timestamp": 1426964400,
            "firstHalfStart": 1426964400,
            "secondHalfStart": 1426968000,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Edvin Jurisevic, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491149,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-03-28T19:00:00+00:00",
            "event_timestamp": 1427569200,
            "firstHalfStart": 1427569200,
            "secondHalfStart": 1427572800,
            "round": "Regular Season - 3",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1596,
                "team_name": "San Jose Earthquakes",
                "logo": "https://media.api-sports.io/football/teams/1596.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491161,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-04-04T23:00:00+00:00",
            "event_timestamp": 1428188400,
            "firstHalfStart": 1428188400,
            "secondHalfStart": 1428192000,
            "round": "Regular Season - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Dick's Sporting Goods Park",
            "referee": "Fotis Bazakos, USA",
            "homeTeam": {
                "team_id": 1610,
                "team_name": "Colorado Rapids",
                "logo": "https://media.api-sports.io/football/teams/1610.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491169,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-04-11T19:00:00+00:00",
            "event_timestamp": 1428778800,
            "firstHalfStart": 1428778800,
            "secondHalfStart": 1428782400,
            "round": "Regular Season - 5",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Petrescu Silvio, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491185,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-04-19T21:00:00+00:00",
            "event_timestamp": 1429477200,
            "firstHalfStart": 1429477200,
            "secondHalfStart": 1429480800,
            "round": "Regular Season - 7",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Talen Energy Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491189,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-04-25T23:30:00+00:00",
            "event_timestamp": 1430004600,
            "firstHalfStart": 1430004600,
            "secondHalfStart": 1430008200,
            "round": "Regular Season - 7",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1606,
                "team_name": "Real Salt Lake",
                "logo": "https://media.api-sports.io/football/teams/1606.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "2-0",
                "fulltime": "4-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491201,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-05-02T23:30:00+00:00",
            "event_timestamp": 1430609400,
            "firstHalfStart": 1430609400,
            "secondHalfStart": 1430613000,
            "round": "Regular Season - 8",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Marcos de Oliveira, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491208,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-05-09T00:00:00+00:00",
            "event_timestamp": 1431129600,
            "firstHalfStart": 1431129600,
            "secondHalfStart": 1431133200,
            "round": "Regular Season - 9",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Orlando Citrus Bowl Stadium",
            "referee": "Ted Unkel, USA",
            "homeTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491223,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-05-16T23:30:00+00:00",
            "event_timestamp": 1431819000,
            "firstHalfStart": 1431819000,
            "secondHalfStart": 1431822600,
            "round": "Regular Season - 11",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Sorin Stoica, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491228,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-05-21T00:00:00+00:00",
            "event_timestamp": 1432166400,
            "firstHalfStart": 1432166400,
            "secondHalfStart": 1432170000,
            "round": "Regular Season - 11",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Children's Mercy Park",
            "referee": "Allen Chapman, USA",
            "homeTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "3-1",
                "fulltime": "4-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491232,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-05-23T23:30:00+00:00",
            "event_timestamp": 1432423800,
            "firstHalfStart": 1432423800,
            "secondHalfStart": 1432427400,
            "round": "Regular Season - 11",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491251,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-05-31T23:00:00+00:00",
            "event_timestamp": 1433113200,
            "firstHalfStart": 1433113200,
            "secondHalfStart": 1433116800,
            "round": "Regular Season - 13",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Alan Kelly, Ireland",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1605,
                "team_name": "Los Angeles Galaxy",
                "logo": "https://media.api-sports.io/football/teams/1605.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "2-2",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491261,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-06-07T02:30:00+00:00",
            "event_timestamp": 1433644200,
            "firstHalfStart": 1433644200,
            "secondHalfStart": 1433647800,
            "round": "Regular Season - 14",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Providence Park",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1617,
                "team_name": "Portland Timbers",
                "logo": "https://media.api-sports.io/football/teams/1617.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491267,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-06-13T23:30:00+00:00",
            "event_timestamp": 1434238200,
            "firstHalfStart": 1434238200,
            "secondHalfStart": 1434241800,
            "round": "Regular Season - 15",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Petrescu Silvio, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 492505,
            "league_id": 2288,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-06-17T23:30:00+00:00",
            "event_timestamp": 1434583800,
            "firstHalfStart": 1434583800,
            "secondHalfStart": 1434587400,
            "round": "4th Round",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Soldiers Field Soccer Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 3991,
                "team_name": "Charlotte Independence",
                "logo": "https://media.api-sports.io/football/teams/3991.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491277,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-06-21T21:00:00+00:00",
            "event_timestamp": 1434920400,
            "firstHalfStart": 1434920400,
            "secondHalfStart": 1434924000,
            "round": "Regular Season - 16",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "RFK Stadium",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491280,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-06-24T23:30:00+00:00",
            "event_timestamp": 1435188600,
            "firstHalfStart": 1435188600,
            "secondHalfStart": 1435192200,
            "round": "Regular Season - 16",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "MAPFRE Stadium",
            "referee": "Fotis Bazakos, USA",
            "homeTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491289,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-06-27T23:30:00+00:00",
            "event_timestamp": 1435447800,
            "firstHalfStart": 1435447800,
            "secondHalfStart": 1435451400,
            "round": "Regular Season - 17",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Allen Chapman, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 8007,
                "team_name": "Whitecaps",
                "logo": "https://media.api-sports.io/football/teams/8007.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-2",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491299,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-07-05T01:00:00+00:00",
            "event_timestamp": 1436058000,
            "firstHalfStart": 1436058000,
            "secondHalfStart": 1436061600,
            "round": "Regular Season - 18",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Stadium",
            "referee": "Baldomero Toledo, USA",
            "homeTeam": {
                "team_id": 1597,
                "team_name": "FC Dallas",
                "logo": "https://media.api-sports.io/football/teams/1597.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491305,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-07-11T23:00:00+00:00",
            "event_timestamp": 1436655600,
            "firstHalfStart": 1436655600,
            "secondHalfStart": 1436659200,
            "round": "Regular Season - 19",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Red Bull Arena",
            "referee": "Alan Kelly, Ireland",
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "3-1",
                "fulltime": "4-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491317,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-07-18T23:30:00+00:00",
            "event_timestamp": 1437262200,
            "firstHalfStart": 1437262200,
            "secondHalfStart": 1437265800,
            "round": "Regular Season - 20",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Sorin Stoica, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491327,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-07-26T00:30:00+00:00",
            "event_timestamp": 1437870600,
            "firstHalfStart": 1437870600,
            "secondHalfStart": 1437874200,
            "round": "Regular Season - 21",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": "Ricardo Salazar, USA",
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491337,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-08-01T23:30:00+00:00",
            "event_timestamp": 1438471800,
            "firstHalfStart": 1438471800,
            "secondHalfStart": 1438475400,
            "round": "Regular Season - 22",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Chris Penso, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-0",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491357,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-08-15T23:30:00+00:00",
            "event_timestamp": 1439681400,
            "firstHalfStart": 1439681400,
            "secondHalfStart": 1439685000,
            "round": "Regular Season - 24",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491379,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-08-29T23:00:00+00:00",
            "event_timestamp": 1440889200,
            "firstHalfStart": 1440889200,
            "secondHalfStart": 1440892800,
            "round": "Regular Season - 26",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Talen Energy Stadium",
            "referee": "Chris Penso, USA",
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491386,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-09-05T23:30:00+00:00",
            "event_timestamp": 1441495800,
            "firstHalfStart": 1441495800,
            "secondHalfStart": 1441499400,
            "round": "Regular Season - 27",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491400,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-09-13T21:00:00+00:00",
            "event_timestamp": 1442178000,
            "firstHalfStart": 1442178000,
            "secondHalfStart": 1442181600,
            "round": "Regular Season - 28",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BMO Field",
            "referee": "Baldomero Toledo, USA",
            "homeTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-2",
                "fulltime": "1-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491403,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-09-16T23:30:00+00:00",
            "event_timestamp": 1442446200,
            "firstHalfStart": 1442446200,
            "secondHalfStart": 1442449800,
            "round": "Regular Season - 29",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491410,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-09-20T00:00:00+00:00",
            "event_timestamp": 1442707200,
            "firstHalfStart": 1442707200,
            "secondHalfStart": 1442710800,
            "round": "Regular Season - 29",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Saputo Stadium",
            "referee": "Ricardo Salazar, USA",
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491420,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-09-26T23:30:00+00:00",
            "event_timestamp": 1443310200,
            "firstHalfStart": 1443310200,
            "secondHalfStart": 1443313800,
            "round": "Regular Season - 30",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Alan Kelly, Ireland",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491431,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-10-04T00:30:00+00:00",
            "event_timestamp": 1443918600,
            "firstHalfStart": 1443918600,
            "secondHalfStart": 1443922200,
            "round": "Regular Season - 31",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": "Kevin Stott, USA",
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491446,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-10-17T23:30:00+00:00",
            "event_timestamp": 1445124600,
            "firstHalfStart": 1445124600,
            "secondHalfStart": 1445128200,
            "round": "Regular Season - 33",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491454,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-10-25T20:00:00+00:00",
            "event_timestamp": 1445803200,
            "firstHalfStart": 1445803200,
            "secondHalfStart": 1445806800,
            "round": "Regular Season - 34",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Yankee Stadium",
            "referee": "Jair Marrufo, USA",
            "homeTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-2",
                "fulltime": "1-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 491119,
            "league_id": 2284,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2015-10-28T23:30:00+00:00",
            "event_timestamp": 1446075000,
            "firstHalfStart": 1446075000,
            "secondHalfStart": 1446078600,
            "round": "Play-In Round - Finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "RFK Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148311,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-03-06T20:00:00+00:00",
            "event_timestamp": 1457294400,
            "firstHalfStart": 1457294400,
            "secondHalfStart": 1457298000,
            "round": "Regular Season - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BBVA Compass Stadium",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "1-1",
                "fulltime": "3-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148318,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-03-12T20:00:00+00:00",
            "event_timestamp": 1457812800,
            "firstHalfStart": 1457812800,
            "secondHalfStart": 1457816400,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Petrescu Silvio, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148334,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-03-20T18:30:00+00:00",
            "event_timestamp": 1458498600,
            "firstHalfStart": 1458498600,
            "secondHalfStart": 1458502200,
            "round": "Regular Season - 3",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Talen Energy Stadium",
            "referee": "Nima Saghafi, USA",
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "2-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148337,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-03-26T19:00:00+00:00",
            "event_timestamp": 1459018800,
            "firstHalfStart": 1459018800,
            "secondHalfStart": 1459022400,
            "round": "Regular Season - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Yankee Stadium",
            "referee": "Ricardo Salazar, USA",
            "homeTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148340,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-04-01T23:00:00+00:00",
            "event_timestamp": 1459551600,
            "firstHalfStart": 1459551600,
            "secondHalfStart": 1459555200,
            "round": "Regular Season - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148350,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-04-09T20:00:00+00:00",
            "event_timestamp": 1460232000,
            "firstHalfStart": 1460232000,
            "secondHalfStart": 1460235600,
            "round": "Regular Season - 5",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Edvin Jurisevic, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148370,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-04-17T19:30:00+00:00",
            "event_timestamp": 1460921400,
            "firstHalfStart": 1460921400,
            "secondHalfStart": 1460925000,
            "round": "Regular Season - 7",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Orlando Citrus Bowl Stadium",
            "referee": "Baldomero Toledo, USA",
            "homeTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148374,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-04-23T21:30:00+00:00",
            "event_timestamp": 1461447000,
            "firstHalfStart": 1461447000,
            "secondHalfStart": 1461450600,
            "round": "Regular Season - 7",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "RFK Stadium",
            "referee": "Alan Kelly, Ireland",
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148382,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-04-27T23:30:00+00:00",
            "event_timestamp": 1461799800,
            "firstHalfStart": 1461799800,
            "secondHalfStart": 1461803400,
            "round": "Regular Season - 8",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1617,
                "team_name": "Portland Timbers",
                "logo": "https://media.api-sports.io/football/teams/1617.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148390,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-04-30T23:30:00+00:00",
            "event_timestamp": 1462059000,
            "firstHalfStart": 1462059000,
            "secondHalfStart": 1462062600,
            "round": "Regular Season - 9",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Robert Sibiga, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148401,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-05-08T19:30:00+00:00",
            "event_timestamp": 1462735800,
            "firstHalfStart": 1462735800,
            "secondHalfStart": 1462739400,
            "round": "Regular Season - 10",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "StubHub Center",
            "referee": "Hilario Grajeda, USA",
            "homeTeam": {
                "team_id": 1605,
                "team_name": "Los Angeles Galaxy",
                "logo": "https://media.api-sports.io/football/teams/1605.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "3-0",
                "fulltime": "4-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148410,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-05-14T23:30:00+00:00",
            "event_timestamp": 1463268600,
            "firstHalfStart": 1463268600,
            "secondHalfStart": 1463272200,
            "round": "Regular Season - 11",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Jorge Gonzalez, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148424,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-05-21T23:30:00+00:00",
            "event_timestamp": 1463873400,
            "firstHalfStart": 1463873400,
            "secondHalfStart": 1463877000,
            "round": "Regular Season - 12",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Petrescu Silvio, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1597,
                "team_name": "FC Dallas",
                "logo": "https://media.api-sports.io/football/teams/1597.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 4,
            "score": {
                "halftime": "2-2",
                "fulltime": "2-4",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148433,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-05-28T23:30:00+00:00",
            "event_timestamp": 1464478200,
            "firstHalfStart": 1464478200,
            "secondHalfStart": 1464481800,
            "round": "Regular Season - 13",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Fotis Bazakos, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1595,
                "team_name": "Seattle Sounders",
                "logo": "https://media.api-sports.io/football/teams/1595.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 280583,
            "league_id": 1182,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-06-15T23:30:00+00:00",
            "event_timestamp": 1466033400,
            "firstHalfStart": 1466033400,
            "secondHalfStart": 1466037000,
            "round": "4th Round",
            "status": "Match Finished",
            "statusShort": "AET",
            "elapsed": 120,
            "venue": "WakeMed Soccer Park (Cary, North Carolina)",
            "referee": null,
            "homeTeam": {
                "team_id": 4005,
                "team_name": "North Carolina",
                "logo": "https://media.api-sports.io/football/teams/4005.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": "0-1",
                "penalty": null
            }
        },
        {
            "fixture_id": 148447,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-06-18T23:00:00+00:00",
            "event_timestamp": 1466290800,
            "firstHalfStart": 1466290800,
            "secondHalfStart": 1466294400,
            "round": "Regular Season - 15",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BC Place Stadium",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1603,
                "team_name": "Vancouver Whitecaps",
                "logo": "https://media.api-sports.io/football/teams/1603.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148461,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-06-25T23:00:00+00:00",
            "event_timestamp": 1466895600,
            "firstHalfStart": 1466895600,
            "secondHalfStart": 1466899200,
            "round": "Regular Season - 16",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "RFK Stadium",
            "referee": "Marcos de Oliveira, USA",
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "2-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 280563,
            "league_id": 1182,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-06-29T23:30:00+00:00",
            "event_timestamp": 1467243000,
            "firstHalfStart": 1467243000,
            "secondHalfStart": 1467246600,
            "round": "8th Finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Belson Stadium at St John's University (Queens, New York)",
            "referee": null,
            "homeTeam": {
                "team_id": 9033,
                "team_name": "NY Cosmos",
                "logo": "https://media.api-sports.io/football/teams/9033.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148470,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-07-02T21:30:00+00:00",
            "event_timestamp": 1467495000,
            "firstHalfStart": 1467495000,
            "secondHalfStart": 1467498600,
            "round": "Regular Season - 17",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Saputo Stadium",
            "referee": "Chris Penso, USA",
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-2",
                "fulltime": "3-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148478,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-07-06T23:30:00+00:00",
            "event_timestamp": 1467847800,
            "firstHalfStart": 1467847800,
            "secondHalfStart": 1467851400,
            "round": "Regular Season - 18",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "David Gantar, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148483,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-07-09T23:30:00+00:00",
            "event_timestamp": 1468107000,
            "firstHalfStart": 1468107000,
            "secondHalfStart": 1468110600,
            "round": "Regular Season - 18",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-1",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148499,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-07-17T02:00:00+00:00",
            "event_timestamp": 1468720800,
            "firstHalfStart": 1468720800,
            "secondHalfStart": 1468724400,
            "round": "Regular Season - 20",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Rio Tinto Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1606,
                "team_name": "Real Salt Lake",
                "logo": "https://media.api-sports.io/football/teams/1606.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 280567,
            "league_id": 1182,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-07-20T23:30:00+00:00",
            "event_timestamp": 1469057400,
            "firstHalfStart": 1469057400,
            "secondHalfStart": 1469061000,
            "round": "Quarter-finals",
            "status": "Match Finished",
            "statusShort": "PEN",
            "elapsed": 120,
            "venue": "Harvard Stadium (Boston, Massachusetts)",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": "1-1",
                "penalty": "4-2"
            }
        },
        {
            "fixture_id": 148507,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-07-23T23:30:00+00:00",
            "event_timestamp": 1469316600,
            "firstHalfStart": 1469316600,
            "secondHalfStart": 1469320200,
            "round": "Regular Season - 21",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Juan Guzman, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148522,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-07-31T23:30:00+00:00",
            "event_timestamp": 1470007800,
            "firstHalfStart": 1470007800,
            "secondHalfStart": 1470011400,
            "round": "Regular Season - 22",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Orlando Citrus Bowl Stadium",
            "referee": "Petrescu Silvio, Canada",
            "homeTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148528,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-08-06T23:30:00+00:00",
            "event_timestamp": 1470526200,
            "firstHalfStart": 1470526200,
            "secondHalfStart": 1470529800,
            "round": "Regular Season - 23",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BMO Field",
            "referee": "Ted Unkel, USA",
            "homeTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-0",
                "fulltime": "4-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 280571,
            "league_id": 1182,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-08-10T00:00:00+00:00",
            "event_timestamp": 1470787200,
            "firstHalfStart": 1470787200,
            "secondHalfStart": 1470790800,
            "round": "Semi-finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium (Foxborough, Massachusetts)",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-1",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148537,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-08-13T23:30:00+00:00",
            "event_timestamp": 1471131000,
            "firstHalfStart": 1471131000,
            "secondHalfStart": 1471134600,
            "round": "Regular Season - 24",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Robert Sibiga, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 4,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-4",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148548,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-08-20T23:30:00+00:00",
            "event_timestamp": 1471735800,
            "firstHalfStart": 1471735800,
            "secondHalfStart": 1471739400,
            "round": "Regular Season - 25",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Edvin Jurisevic, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148560,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-08-25T02:30:00+00:00",
            "event_timestamp": 1472092200,
            "firstHalfStart": 1472092200,
            "secondHalfStart": 1472095800,
            "round": "Regular Season - 26",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Avaya Stadium",
            "referee": "Hilario Grajeda, USA",
            "homeTeam": {
                "team_id": 1596,
                "team_name": "San Jose Earthquakes",
                "logo": "https://media.api-sports.io/football/teams/1596.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148568,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-08-28T18:30:00+00:00",
            "event_timestamp": 1472409000,
            "firstHalfStart": 1472409000,
            "secondHalfStart": 1472412600,
            "round": "Regular Season - 27",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Red Bull Arena",
            "referee": "Ricardo Salazar, USA",
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148573,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-09-03T23:30:00+00:00",
            "event_timestamp": 1472945400,
            "firstHalfStart": 1472945400,
            "secondHalfStart": 1472949000,
            "round": "Regular Season - 27",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Alan Kelly, Ireland",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1610,
                "team_name": "Colorado Rapids",
                "logo": "https://media.api-sports.io/football/teams/1610.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148582,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-09-11T00:00:00+00:00",
            "event_timestamp": 1473552000,
            "firstHalfStart": 1473552000,
            "secondHalfStart": 1473555600,
            "round": "Regular Season - 28",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Juan Guzman, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-0",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 280573,
            "league_id": 1182,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-09-14T02:00:00+00:00",
            "event_timestamp": 1473818400,
            "firstHalfStart": 1473818400,
            "secondHalfStart": 1473822000,
            "round": "Final",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Stadium (Frisco, Texas)",
            "referee": null,
            "homeTeam": {
                "team_id": 1597,
                "team_name": "FC Dallas",
                "logo": "https://media.api-sports.io/football/teams/1597.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "3-1",
                "fulltime": "4-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148594,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-09-17T23:30:00+00:00",
            "event_timestamp": 1474155000,
            "firstHalfStart": 1474155000,
            "secondHalfStart": 1474158600,
            "round": "Regular Season - 29",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Saputo Stadium",
            "referee": "Allen Chapman, USA",
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-2",
                "fulltime": "1-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148608,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-09-25T23:00:00+00:00",
            "event_timestamp": 1474844400,
            "firstHalfStart": 1474844400,
            "secondHalfStart": 1474848000,
            "round": "Regular Season - 31",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "MAPFRE Stadium",
            "referee": "Chris Penso, USA",
            "homeTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148615,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-10-01T23:30:00+00:00",
            "event_timestamp": 1475364600,
            "firstHalfStart": 1475364600,
            "secondHalfStart": 1475368200,
            "round": "Regular Season - 31",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Alan Kelly, Ireland",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148631,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-10-16T19:00:00+00:00",
            "event_timestamp": 1476644400,
            "firstHalfStart": 1476644400,
            "secondHalfStart": 1476648000,
            "round": "Regular Season - 33",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": "Baldomero Toledo, USA",
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148643,
            "league_id": 201,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2016-10-23T20:00:00+00:00",
            "event_timestamp": 1477252800,
            "firstHalfStart": 1477252800,
            "secondHalfStart": 1477256400,
            "round": "Regular Season - 34",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Hilario Grajeda, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147921,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-03-04T23:00:00+00:00",
            "event_timestamp": 1488668400,
            "firstHalfStart": 1488668400,
            "secondHalfStart": 1488672000,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Dick's Sporting Goods Park",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1610,
                "team_name": "Colorado Rapids",
                "logo": "https://media.api-sports.io/football/teams/1610.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147943,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-03-19T00:00:00+00:00",
            "event_timestamp": 1489881600,
            "firstHalfStart": 1489881600,
            "secondHalfStart": 1489885200,
            "round": "Regular Season - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Stadium",
            "referee": "Alan Kelly, Ireland",
            "homeTeam": {
                "team_id": 1597,
                "team_name": "FC Dallas",
                "logo": "https://media.api-sports.io/football/teams/1597.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147949,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-03-25T18:00:00+00:00",
            "event_timestamp": 1490464800,
            "firstHalfStart": 1490464800,
            "secondHalfStart": 1490468400,
            "round": "Regular Season - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Ricardo Salazar, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1612,
                "team_name": "Minnesota Stars FC",
                "logo": "https://media.api-sports.io/football/teams/1612.png"
            },
            "goalsHomeTeam": 5,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "4-1",
                "fulltime": "5-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147961,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-04-03T01:00:00+00:00",
            "event_timestamp": 1491181200,
            "firstHalfStart": 1491181200,
            "secondHalfStart": 1491184800,
            "round": "Regular Season - 6",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Providence Park",
            "referee": "Kevin Stott, USA",
            "homeTeam": {
                "team_id": 1617,
                "team_name": "Portland Timbers",
                "logo": "https://media.api-sports.io/football/teams/1617.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147963,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-04-08T18:00:00+00:00",
            "event_timestamp": 1491674400,
            "firstHalfStart": 1491674400,
            "secondHalfStart": 1491678000,
            "round": "Regular Season - 6",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Silviu Petrescu, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147978,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-04-15T21:00:00+00:00",
            "event_timestamp": 1492290000,
            "firstHalfStart": 1492290000,
            "secondHalfStart": 1492293600,
            "round": "Regular Season - 7",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": "Ted Unkel, USA",
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147984,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-04-19T23:30:00+00:00",
            "event_timestamp": 1492644600,
            "firstHalfStart": 1492644600,
            "secondHalfStart": 1492648200,
            "round": "Regular Season - 8",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Hilario Grajeda, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1596,
                "team_name": "San Jose Earthquakes",
                "logo": "https://media.api-sports.io/football/teams/1596.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147990,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-04-22T23:30:00+00:00",
            "event_timestamp": 1492903800,
            "firstHalfStart": 1492903800,
            "secondHalfStart": 1492907400,
            "round": "Regular Season - 8",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-2",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148004,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-04-30T02:00:00+00:00",
            "event_timestamp": 1493517600,
            "firstHalfStart": 1493517600,
            "secondHalfStart": 1493521200,
            "round": "Regular Season - 10",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "CenturyLink Field",
            "referee": "Allen Chapman, USA",
            "homeTeam": {
                "team_id": 1595,
                "team_name": "Seattle Sounders",
                "logo": "https://media.api-sports.io/football/teams/1595.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-2",
                "fulltime": "3-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148013,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-05-06T23:30:00+00:00",
            "event_timestamp": 1494113400,
            "firstHalfStart": 1494113400,
            "secondHalfStart": 1494117000,
            "round": "Regular Season - 11",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "MAPFRE Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148027,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-05-13T23:30:00+00:00",
            "event_timestamp": 1494718200,
            "firstHalfStart": 1494718200,
            "secondHalfStart": 1494721800,
            "round": "Regular Season - 12",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Hilario Grajeda, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1606,
                "team_name": "Real Salt Lake",
                "logo": "https://media.api-sports.io/football/teams/1606.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "4-0",
                "fulltime": "4-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148045,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-05-21T18:30:00+00:00",
            "event_timestamp": 1495391400,
            "firstHalfStart": 1495391400,
            "secondHalfStart": 1495395000,
            "round": "Regular Season - 14",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Alan Kelly, Ireland",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148052,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-05-27T23:30:00+00:00",
            "event_timestamp": 1495927800,
            "firstHalfStart": 1495927800,
            "secondHalfStart": 1495931400,
            "round": "Regular Season - 15",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Red Bull Arena",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148059,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-05-31T23:30:00+00:00",
            "event_timestamp": 1496273400,
            "firstHalfStart": 1496273400,
            "secondHalfStart": 1496277000,
            "round": "Regular Season - 15",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Yankee Stadium",
            "referee": "Chris Penso, USA",
            "homeTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148069,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-06-03T23:30:00+00:00",
            "event_timestamp": 1496532600,
            "firstHalfStart": 1496532600,
            "secondHalfStart": 1496536200,
            "round": "Regular Season - 16",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Villarrea Armando, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 280481,
            "league_id": 1181,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-06-14T23:30:00+00:00",
            "event_timestamp": 1497483000,
            "firstHalfStart": 1497483000,
            "secondHalfStart": 1497486600,
            "round": "4th Round",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Anderson Stadium (Providence, Rhode Island)",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 4027,
                "team_name": "Rochester Rhinos",
                "logo": "https://media.api-sports.io/football/teams/4027.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148080,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-06-17T23:30:00+00:00",
            "event_timestamp": 1497742200,
            "firstHalfStart": 1497742200,
            "secondHalfStart": 1497745800,
            "round": "Regular Season - 17",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Kevin Stott, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148092,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-06-24T00:00:00+00:00",
            "event_timestamp": 1498262400,
            "firstHalfStart": 1498262400,
            "secondHalfStart": 1498266000,
            "round": "Regular Season - 19",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BMO Field",
            "referee": "Hilario Grajeda, USA",
            "homeTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 280463,
            "league_id": 1181,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-06-28T23:30:00+00:00",
            "event_timestamp": 1498692600,
            "firstHalfStart": 1498692600,
            "secondHalfStart": 1498696200,
            "round": "8th Finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Jordan Field (Boston, Massachusetts)",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148112,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-07-02T21:00:00+00:00",
            "event_timestamp": 1499029200,
            "firstHalfStart": 1499029200,
            "secondHalfStart": 1499032800,
            "round": "Regular Season - 21",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Talen Energy Stadium",
            "referee": "Chris Penso, USA",
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148119,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-07-05T23:30:00+00:00",
            "event_timestamp": 1499297400,
            "firstHalfStart": 1499297400,
            "secondHalfStart": 1499301000,
            "round": "Regular Season - 21",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Silviu Petrescu, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "2-1",
                "fulltime": "2-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 280471,
            "league_id": 1181,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-07-13T23:30:00+00:00",
            "event_timestamp": 1499988600,
            "firstHalfStart": 1499988600,
            "secondHalfStart": 1499992200,
            "round": "Quarter-finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Jordan Field (Boston, Massachusetts)",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148136,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-07-22T23:30:00+00:00",
            "event_timestamp": 1500766200,
            "firstHalfStart": 1500766200,
            "secondHalfStart": 1500769800,
            "round": "Regular Season - 23",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Jorge Gonzalez, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1605,
                "team_name": "Los Angeles Galaxy",
                "logo": "https://media.api-sports.io/football/teams/1605.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "2-1",
                "fulltime": "4-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148145,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-07-29T23:30:00+00:00",
            "event_timestamp": 1501371000,
            "firstHalfStart": 1501371000,
            "secondHalfStart": 1501374600,
            "round": "Regular Season - 24",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Nima Saghafi, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "3-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148158,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-08-06T00:30:00+00:00",
            "event_timestamp": 1501979400,
            "firstHalfStart": 1501979400,
            "secondHalfStart": 1501983000,
            "round": "Regular Season - 25",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": "Silviu Petrescu, Canada",
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-1",
                "fulltime": "4-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148170,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-08-13T00:00:00+00:00",
            "event_timestamp": 1502582400,
            "firstHalfStart": 1502582400,
            "secondHalfStart": 1502586000,
            "round": "Regular Season - 26",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1603,
                "team_name": "Vancouver Whitecaps",
                "logo": "https://media.api-sports.io/football/teams/1603.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148184,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-08-20T22:00:00+00:00",
            "event_timestamp": 1503266400,
            "firstHalfStart": 1503266400,
            "secondHalfStart": 1503270000,
            "round": "Regular Season - 28",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Yankee Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148195,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-08-26T23:00:00+00:00",
            "event_timestamp": 1503788400,
            "firstHalfStart": 1503788400,
            "secondHalfStart": 1503792000,
            "round": "Regular Season - 29",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "RFK Stadium",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148204,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-09-02T23:00:00+00:00",
            "event_timestamp": 1504393200,
            "firstHalfStart": 1504393200,
            "secondHalfStart": 1504396800,
            "round": "Regular Season - 30",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Robert Sibiga, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "4-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148212,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-09-09T23:30:00+00:00",
            "event_timestamp": 1504999800,
            "firstHalfStart": 1504999800,
            "secondHalfStart": 1505003400,
            "round": "Regular Season - 31",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Villarrea Armando, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148219,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-09-13T23:00:00+00:00",
            "event_timestamp": 1505343600,
            "firstHalfStart": 1505343600,
            "secondHalfStart": 1505347200,
            "round": "Regular Season - 31",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Mercedes-Benz Stadium",
            "referee": "Baldomero Toledo, USA",
            "homeTeam": {
                "team_id": 1608,
                "team_name": "Atlanta United FC",
                "logo": "https://media.api-sports.io/football/teams/1608.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 7,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "4-0",
                "fulltime": "7-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148225,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-09-17T00:30:00+00:00",
            "event_timestamp": 1505608200,
            "firstHalfStart": 1505608200,
            "secondHalfStart": 1505611800,
            "round": "Regular Season - 32",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Children's Mercy Park",
            "referee": "Jorge Gonzalez, USA",
            "homeTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-1",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148235,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-09-23T21:00:00+00:00",
            "event_timestamp": 1506200400,
            "firstHalfStart": 1506200400,
            "secondHalfStart": 1506204000,
            "round": "Regular Season - 33",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Alan Kelly, Ireland",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148246,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-09-27T23:30:00+00:00",
            "event_timestamp": 1506555000,
            "firstHalfStart": 1506555000,
            "secondHalfStart": 1506558600,
            "round": "Regular Season - 34",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Orlando City Stadium",
            "referee": "Silviu Petrescu, Canada",
            "homeTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 6,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "3-1",
                "fulltime": "6-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148255,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-09-30T23:30:00+00:00",
            "event_timestamp": 1506814200,
            "firstHalfStart": 1506814200,
            "secondHalfStart": 1506817800,
            "round": "Regular Season - 35",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Nima Saghafi, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1608,
                "team_name": "Atlanta United FC",
                "logo": "https://media.api-sports.io/football/teams/1608.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148272,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-10-15T21:00:00+00:00",
            "event_timestamp": 1508101200,
            "firstHalfStart": 1508101200,
            "secondHalfStart": 1508104800,
            "round": "Regular Season - 37",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Nima Saghafi, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 148289,
            "league_id": 200,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2017-10-22T20:00:00+00:00",
            "event_timestamp": 1508702400,
            "firstHalfStart": 1508702400,
            "secondHalfStart": 1508706000,
            "round": "Regular Season - 38",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Saputo Stadium",
            "referee": "Rubiel Vazquez, USA",
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147511,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-03-04T00:00:00+00:00",
            "event_timestamp": 1520121600,
            "firstHalfStart": 1520121600,
            "secondHalfStart": 1520125200,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Talen Energy Stadium",
            "referee": "Rubiel Vazquez, USA",
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147520,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-03-10T18:30:00+00:00",
            "event_timestamp": 1520706600,
            "firstHalfStart": 1520706600,
            "secondHalfStart": 1520710200,
            "round": "Regular Season - 3",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Villarrea Armando, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1610,
                "team_name": "Colorado Rapids",
                "logo": "https://media.api-sports.io/football/teams/1610.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147537,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-03-24T17:30:00+00:00",
            "event_timestamp": 1521912600,
            "firstHalfStart": 1521912600,
            "secondHalfStart": 1521916200,
            "round": "Regular Season - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Jair Marrufo, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147550,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-04-01T00:30:00+00:00",
            "event_timestamp": 1522542600,
            "firstHalfStart": 1522542600,
            "secondHalfStart": 1522546200,
            "round": "Regular Season - 6",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BBVA Compass Stadium",
            "referee": "Sorin Stoica, USA",
            "homeTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147554,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-04-06T23:30:00+00:00",
            "event_timestamp": 1523057400,
            "firstHalfStart": 1523057400,
            "secondHalfStart": 1523061000,
            "round": "Regular Season - 6",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "2-0",
                "fulltime": "4-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147569,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-04-14T23:30:00+00:00",
            "event_timestamp": 1523748600,
            "firstHalfStart": 1523748600,
            "secondHalfStart": 1523752200,
            "round": "Regular Season - 7",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Hilario Grajeda, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1597,
                "team_name": "FC Dallas",
                "logo": "https://media.api-sports.io/football/teams/1597.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147578,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-04-21T23:30:00+00:00",
            "event_timestamp": 1524353400,
            "firstHalfStart": 1524353400,
            "secondHalfStart": 1524357000,
            "round": "Regular Season - 8",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "MAPFRE Stadium",
            "referee": "Chris Penso, USA",
            "homeTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "2-2",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147590,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-04-28T23:30:00+00:00",
            "event_timestamp": 1524958200,
            "firstHalfStart": 1524958200,
            "secondHalfStart": 1524961800,
            "round": "Regular Season - 10",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "David Gantar, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147597,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-05-05T17:00:00+00:00",
            "event_timestamp": 1525539600,
            "firstHalfStart": 1525539600,
            "secondHalfStart": 1525543200,
            "round": "Regular Season - 10",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Saputo Stadium",
            "referee": "Baldomero Toledo, USA",
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-0",
                "fulltime": "4-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147616,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-05-12T23:30:00+00:00",
            "event_timestamp": 1526167800,
            "firstHalfStart": 1526167800,
            "secondHalfStart": 1526171400,
            "round": "Regular Season - 12",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "2-0",
                "fulltime": "3-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147628,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-05-19T23:30:00+00:00",
            "event_timestamp": 1526772600,
            "firstHalfStart": 1526772600,
            "secondHalfStart": 1526776200,
            "round": "Regular Season - 13",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Sorin Stoica, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147639,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-05-26T21:30:00+00:00",
            "event_timestamp": 1527370200,
            "firstHalfStart": 1527370200,
            "secondHalfStart": 1527373800,
            "round": "Regular Season - 14",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BC Place Stadium",
            "referee": "Joseph Dickerson, USA",
            "homeTeam": {
                "team_id": 1603,
                "team_name": "Vancouver Whitecaps",
                "logo": "https://media.api-sports.io/football/teams/1603.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-1",
                "fulltime": "3-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147646,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-05-30T23:30:00+00:00",
            "event_timestamp": 1527723000,
            "firstHalfStart": 1527723000,
            "secondHalfStart": 1527726600,
            "round": "Regular Season - 15",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Petrescu Silvio, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1608,
                "team_name": "Atlanta United FC",
                "logo": "https://media.api-sports.io/football/teams/1608.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147654,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-06-02T23:30:00+00:00",
            "event_timestamp": 1527982200,
            "firstHalfStart": 1527982200,
            "secondHalfStart": 1527985800,
            "round": "Regular Season - 16",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 280380,
            "league_id": 1180,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-06-05T23:00:00+00:00",
            "event_timestamp": 1528239600,
            "firstHalfStart": 1528239600,
            "secondHalfStart": 1528243200,
            "round": "4th Round",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Mark & Cindy Lynn Soccer Stadium (Louisville, Kentucky)",
            "referee": null,
            "homeTeam": {
                "team_id": 4000,
                "team_name": "Louisville City",
                "logo": "https://media.api-sports.io/football/teams/4000.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "2-2",
                "fulltime": "3-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147666,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-06-10T00:30:00+00:00",
            "event_timestamp": 1528590600,
            "firstHalfStart": 1528590600,
            "secondHalfStart": 1528594200,
            "round": "Regular Season - 17",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": "Kevin Stott, USA",
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147677,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-06-14T02:30:00+00:00",
            "event_timestamp": 1528943400,
            "firstHalfStart": 1528943400,
            "secondHalfStart": 1528947000,
            "round": "Regular Season - 18",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Avaya Stadium",
            "referee": "David Gantar, Canada",
            "homeTeam": {
                "team_id": 1596,
                "team_name": "San Jose Earthquakes",
                "logo": "https://media.api-sports.io/football/teams/1596.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-2",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147692,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-06-30T23:30:00+00:00",
            "event_timestamp": 1530401400,
            "firstHalfStart": 1530401400,
            "secondHalfStart": 1530405000,
            "round": "Regular Season - 20",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Allen Chapman, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "2-1",
                "fulltime": "3-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147707,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-07-07T23:30:00+00:00",
            "event_timestamp": 1531006200,
            "firstHalfStart": 1531006200,
            "secondHalfStart": 1531009800,
            "round": "Regular Season - 21",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Nima Saghafi, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1595,
                "team_name": "Seattle Sounders",
                "logo": "https://media.api-sports.io/football/teams/1595.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147721,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-07-14T23:30:00+00:00",
            "event_timestamp": 1531611000,
            "firstHalfStart": 1531611000,
            "secondHalfStart": 1531614600,
            "round": "Regular Season - 23",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Robert Sibiga, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1605,
                "team_name": "Los Angeles Galaxy",
                "logo": "https://media.api-sports.io/football/teams/1605.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "2-1",
                "fulltime": "2-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147729,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-07-19T00:00:00+00:00",
            "event_timestamp": 1531958400,
            "firstHalfStart": 1531958400,
            "secondHalfStart": 1531962000,
            "round": "Regular Season - 23",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "TCF Bank Stadium",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1612,
                "team_name": "Minnesota Stars FC",
                "logo": "https://media.api-sports.io/football/teams/1612.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147732,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-07-21T23:00:00+00:00",
            "event_timestamp": 1532214000,
            "firstHalfStart": 1532214000,
            "secondHalfStart": 1532217600,
            "round": "Regular Season - 24",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Red Bull Arena",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147756,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-08-04T23:30:00+00:00",
            "event_timestamp": 1533425400,
            "firstHalfStart": 1533425400,
            "secondHalfStart": 1533429000,
            "round": "Regular Season - 26",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Orlando City Stadium",
            "referee": "Chico Grajeda, USA",
            "homeTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "1-2",
                "fulltime": "3-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147767,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-08-11T23:30:00+00:00",
            "event_timestamp": 1534030200,
            "firstHalfStart": 1534030200,
            "secondHalfStart": 1534033800,
            "round": "Regular Season - 27",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Allen Chapman, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-2",
                "fulltime": "2-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147789,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-08-19T23:55:00+00:00",
            "event_timestamp": 1534722900,
            "firstHalfStart": 1534722900,
            "secondHalfStart": 1534726500,
            "round": "Regular Season - 29",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Audi Field",
            "referee": "Ted Unkel, USA",
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147796,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-08-25T23:00:00+00:00",
            "event_timestamp": 1535238000,
            "firstHalfStart": 1535238000,
            "secondHalfStart": 1535241600,
            "round": "Regular Season - 30",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Talen Energy Stadium",
            "referee": "Drew Fischer, Canada",
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147810,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-09-01T23:30:00+00:00",
            "event_timestamp": 1535844600,
            "firstHalfStart": 1535844600,
            "secondHalfStart": 1535848200,
            "round": "Regular Season - 32",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Jose Carlos Rivero, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1617,
                "team_name": "Portland Timbers",
                "logo": "https://media.api-sports.io/football/teams/1617.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147817,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-09-05T23:00:00+00:00",
            "event_timestamp": 1536188400,
            "firstHalfStart": 1536188400,
            "secondHalfStart": 1536192000,
            "round": "Regular Season - 32",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Yankee Stadium",
            "referee": "Villarrea Armando, USA",
            "homeTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147829,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-09-16T02:30:00+00:00",
            "event_timestamp": 1537065000,
            "firstHalfStart": 1537065000,
            "secondHalfStart": 1537068600,
            "round": "Regular Season - 33",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Banc of California Stadium",
            "referee": "Mark Geiger, USA",
            "homeTeam": {
                "team_id": 1616,
                "team_name": "Los Angeles FC",
                "logo": "https://media.api-sports.io/football/teams/1616.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147840,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-09-22T23:30:00+00:00",
            "event_timestamp": 1537659000,
            "firstHalfStart": 1537659000,
            "secondHalfStart": 1537662600,
            "round": "Regular Season - 35",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Joseph Dickerson, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147852,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-09-29T23:30:00+00:00",
            "event_timestamp": 1538263800,
            "firstHalfStart": 1538263800,
            "secondHalfStart": 1538267400,
            "round": "Regular Season - 36",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BMO Field",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "4-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147860,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-10-06T19:30:00+00:00",
            "event_timestamp": 1538854200,
            "firstHalfStart": 1538854200,
            "secondHalfStart": 1538857800,
            "round": "Regular Season - 37",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Mercedes-Benz Stadium",
            "referee": "Kevin Stott, USA",
            "homeTeam": {
                "team_id": 1608,
                "team_name": "Atlanta United FC",
                "logo": "https://media.api-sports.io/football/teams/1608.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147873,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-10-13T23:30:00+00:00",
            "event_timestamp": 1539473400,
            "firstHalfStart": 1539473400,
            "secondHalfStart": 1539477000,
            "round": "Regular Season - 38",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "David Gantar, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147877,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-10-19T01:00:00+00:00",
            "event_timestamp": 1539910800,
            "firstHalfStart": 1539910800,
            "secondHalfStart": 1539914400,
            "round": "Regular Season - 38",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Rio Tinto Stadium",
            "referee": "Jair Antonio Maruffo, USA",
            "homeTeam": {
                "team_id": 1606,
                "team_name": "Real Salt Lake",
                "logo": "https://media.api-sports.io/football/teams/1606.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "3-0",
                "fulltime": "4-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 147890,
            "league_id": 199,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2018-10-28T20:30:00+00:00",
            "event_timestamp": 1540758600,
            "firstHalfStart": 1540758600,
            "secondHalfStart": 1540762200,
            "round": "Regular Season - 40",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Villarrea Armando, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128170,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-03-02T21:30:00+00:00",
            "event_timestamp": 1551562200,
            "firstHalfStart": 1551562200,
            "secondHalfStart": 1551565800,
            "round": "Regular Season - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Stadium",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1597,
                "team_name": "FC Dallas",
                "logo": "https://media.api-sports.io/football/teams/1597.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128181,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-03-09T19:00:00+00:00",
            "event_timestamp": 1552158000,
            "firstHalfStart": 1552158000,
            "secondHalfStart": 1552161600,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium (Foxborough, Massachusetts)",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128201,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-03-17T23:30:00+00:00",
            "event_timestamp": 1552865400,
            "firstHalfStart": 1552865400,
            "secondHalfStart": 1552869000,
            "round": "Regular Season - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "BMO Field",
            "referee": "Ted Unkel, USA",
            "homeTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "2-1",
                "fulltime": "3-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128207,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-03-24T20:00:00+00:00",
            "event_timestamp": 1553457600,
            "firstHalfStart": 1553457600,
            "secondHalfStart": 1553461200,
            "round": "Regular Season - 5",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Joseph Dickerson, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 2242,
                "team_name": "FC Cincinnati",
                "logo": "https://media.api-sports.io/football/teams/2242.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128210,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-03-30T18:00:00+00:00",
            "event_timestamp": 1553968800,
            "firstHalfStart": 1553968800,
            "secondHalfStart": 1553972400,
            "round": "Regular Season - 5",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Allen Chapman, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1612,
                "team_name": "Minnesota Stars FC",
                "logo": "https://media.api-sports.io/football/teams/1612.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128227,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-04-06T23:30:00+00:00",
            "event_timestamp": 1554593400,
            "firstHalfStart": 1554593400,
            "secondHalfStart": 1554597000,
            "round": "Regular Season - 7",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "MAPFRE Stadium",
            "referee": "Rubiel Vazquez, USA",
            "homeTeam": {
                "team_id": 1613,
                "team_name": "Columbus Crew",
                "logo": "https://media.api-sports.io/football/teams/1613.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128237,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-04-13T23:30:00+00:00",
            "event_timestamp": 1555198200,
            "firstHalfStart": 1555198200,
            "secondHalfStart": 1555201800,
            "round": "Regular Season - 8",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Alex Chilowicz, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1608,
                "team_name": "Atlanta United FC",
                "logo": "https://media.api-sports.io/football/teams/1608.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128252,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-04-20T23:30:00+00:00",
            "event_timestamp": 1555803000,
            "firstHalfStart": 1555803000,
            "secondHalfStart": 1555806600,
            "round": "Regular Season - 9",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Drew Fischer, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128258,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-04-24T23:30:00+00:00",
            "event_timestamp": 1556148600,
            "firstHalfStart": 1556148600,
            "secondHalfStart": 1556152200,
            "round": "Regular Season - 10",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Nima Saghafi, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128268,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-04-28T00:30:00+00:00",
            "event_timestamp": 1556411400,
            "firstHalfStart": 1556411400,
            "secondHalfStart": 1556415000,
            "round": "Regular Season - 11",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Children's Mercy Park",
            "referee": "Baldomero Toledo, USA",
            "homeTeam": {
                "team_id": 1611,
                "team_name": "Sporting Kansas City",
                "logo": "https://media.api-sports.io/football/teams/1611.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 4,
            "score": {
                "halftime": "1-3",
                "fulltime": "4-4",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128280,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-05-04T23:30:00+00:00",
            "event_timestamp": 1557012600,
            "firstHalfStart": 1557012600,
            "secondHalfStart": 1557016200,
            "round": "Regular Season - 12",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Talen Energy Stadium",
            "referee": "Joseph Dickerson, USA",
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 6,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "6-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128290,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-05-09T00:00:00+00:00",
            "event_timestamp": 1557360000,
            "firstHalfStart": 1557360000,
            "secondHalfStart": 1557363600,
            "round": "Regular Season - 13",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Toyota Park",
            "referee": "Tim Ford, USA",
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 5,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "2-0",
                "fulltime": "5-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128296,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-05-11T23:30:00+00:00",
            "event_timestamp": 1557617400,
            "firstHalfStart": 1557617400,
            "secondHalfStart": 1557621000,
            "round": "Regular Season - 14",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Guido Gonzales Jr, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1596,
                "team_name": "San Jose Earthquakes",
                "logo": "https://media.api-sports.io/football/teams/1596.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "2-0",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128308,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-05-18T17:00:00+00:00",
            "event_timestamp": 1558198800,
            "firstHalfStart": 1558198800,
            "secondHalfStart": 1558202400,
            "round": "Regular Season - 15",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Saputo Stadium",
            "referee": "Ramy Touchan, USA",
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128325,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-05-25T23:30:00+00:00",
            "event_timestamp": 1558827000,
            "firstHalfStart": 1558827000,
            "secondHalfStart": 1558830600,
            "round": "Regular Season - 17",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "David Gantar, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128348,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-06-03T02:30:00+00:00",
            "event_timestamp": 1559529000,
            "firstHalfStart": 1559529000,
            "secondHalfStart": 1559532600,
            "round": "Regular Season - 19",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "StubHub Center",
            "referee": "Alex Chilowicz, USA",
            "homeTeam": {
                "team_id": 1605,
                "team_name": "Los Angeles Galaxy",
                "logo": "https://media.api-sports.io/football/teams/1605.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 280298,
            "league_id": 1179,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-06-11T23:30:00+00:00",
            "event_timestamp": 1560295800,
            "firstHalfStart": 1560295800,
            "secondHalfStart": 1560299400,
            "round": "4th Round",
            "status": "Match Finished",
            "statusShort": "AET",
            "elapsed": 120,
            "venue": "MSU Soccer Park at Pittser Field (Montclair, New Jersey)",
            "referee": null,
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-2",
                "extratime": "2-3",
                "penalty": null
            }
        },
        {
            "fixture_id": 280285,
            "league_id": 1179,
            "league": {
                "name": "US Open Cup",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/257.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-06-19T23:30:00+00:00",
            "event_timestamp": 1560987000,
            "firstHalfStart": 1560987000,
            "secondHalfStart": 1560990600,
            "round": "8th Finals",
            "status": "Match Finished",
            "statusShort": "AET",
            "elapsed": 120,
            "venue": "Exploria Stadium (Orlando, Florida)",
            "referee": null,
            "homeTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": "2-1",
                "penalty": null
            }
        },
        {
            "fixture_id": 128361,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-06-26T23:00:00+00:00",
            "event_timestamp": 1561590000,
            "firstHalfStart": 1561590000,
            "secondHalfStart": 1561593600,
            "round": "Regular Season - 20",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Nima Saghafi, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128373,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-06-29T23:30:00+00:00",
            "event_timestamp": 1561851000,
            "firstHalfStart": 1561851000,
            "secondHalfStart": 1561854600,
            "round": "Regular Season - 21",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Petrescu Silvio, Canada",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1600,
                "team_name": "Houston Dynamo",
                "logo": "https://media.api-sports.io/football/teams/1600.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128386,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-07-05T02:00:00+00:00",
            "event_timestamp": 1562292000,
            "firstHalfStart": 1562292000,
            "secondHalfStart": 1562295600,
            "round": "Regular Season - 23",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Dick's Sporting Goods Park",
            "referee": "Alex Chilowicz, USA",
            "homeTeam": {
                "team_id": 1610,
                "team_name": "Colorado Rapids",
                "logo": "https://media.api-sports.io/football/teams/1610.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128398,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-07-12T23:00:00+00:00",
            "event_timestamp": 1562972400,
            "firstHalfStart": 1562972400,
            "secondHalfStart": 1562976000,
            "round": "Regular Season - 24",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Audi Field",
            "referee": "Ted Unkel, USA",
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-2",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128411,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-07-17T23:00:00+00:00",
            "event_timestamp": 1563404400,
            "firstHalfStart": 1563404400,
            "secondHalfStart": 1563408000,
            "round": "Regular Season - 25",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Robert Sibiga, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1603,
                "team_name": "Vancouver Whitecaps",
                "logo": "https://media.api-sports.io/football/teams/1603.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "1-0",
                "fulltime": "4-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128425,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-07-21T22:00:00+00:00",
            "event_timestamp": 1563746400,
            "firstHalfStart": 1563746400,
            "secondHalfStart": 1563750000,
            "round": "Regular Season - 26",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Nippert Stadium",
            "referee": "Kevin Stott, USA",
            "homeTeam": {
                "team_id": 2242,
                "team_name": "FC Cincinnati",
                "logo": "https://media.api-sports.io/football/teams/2242.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128430,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-07-27T23:00:00+00:00",
            "event_timestamp": 1564268400,
            "firstHalfStart": 1564268400,
            "secondHalfStart": 1564272000,
            "round": "Regular Season - 27",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Alan Kelly, Ireland",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "goalsHomeTeam": 4,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "4-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128442,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-08-03T23:30:00+00:00",
            "event_timestamp": 1564875000,
            "firstHalfStart": 1564875000,
            "secondHalfStart": 1564878600,
            "round": "Regular Season - 28",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Rubiel Vazquez, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1616,
                "team_name": "Los Angeles FC",
                "logo": "https://media.api-sports.io/football/teams/1616.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-1",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128453,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-08-10T20:00:00+00:00",
            "event_timestamp": 1565467200,
            "firstHalfStart": 1565467200,
            "secondHalfStart": 1565470800,
            "round": "Regular Season - 29",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "CenturyLink Field",
            "referee": "David Gantar, Canada",
            "homeTeam": {
                "team_id": 1595,
                "team_name": "Seattle Sounders",
                "logo": "https://media.api-sports.io/football/teams/1595.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "1-2",
                "fulltime": "3-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128470,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-08-17T23:00:00+00:00",
            "event_timestamp": 1566082800,
            "firstHalfStart": 1566082800,
            "secondHalfStart": 1566086400,
            "round": "Regular Season - 31",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Red Bull Arena",
            "referee": "Chris Penso, USA",
            "homeTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128489,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-08-24T23:30:00+00:00",
            "event_timestamp": 1566689400,
            "firstHalfStart": 1566689400,
            "secondHalfStart": 1566693000,
            "round": "Regular Season - 33",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Alex Chilowicz, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128501,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-08-31T23:30:00+00:00",
            "event_timestamp": 1567294200,
            "firstHalfStart": 1567294200,
            "secondHalfStart": 1567297800,
            "round": "Regular Season - 34",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Tim Ford, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128511,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-09-07T19:30:00+00:00",
            "event_timestamp": 1567884600,
            "firstHalfStart": 1567884600,
            "secondHalfStart": 1567888200,
            "round": "Regular Season - 35",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Yankee Stadium",
            "referee": "Petrescu Silvio, Canada",
            "homeTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128523,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-09-14T23:30:00+00:00",
            "event_timestamp": 1568503800,
            "firstHalfStart": 1568503800,
            "secondHalfStart": 1568507400,
            "round": "Regular Season - 36",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Orlando City Stadium",
            "referee": "Fotis Bazakos, USA",
            "homeTeam": {
                "team_id": 1598,
                "team_name": "Orlando City SC",
                "logo": "https://media.api-sports.io/football/teams/1598.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 3,
            "score": {
                "halftime": "1-3",
                "fulltime": "3-3",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128538,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-09-21T23:30:00+00:00",
            "event_timestamp": 1569108600,
            "firstHalfStart": 1569108600,
            "secondHalfStart": 1569112200,
            "round": "Regular Season - 38",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Villarrea Armando, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1606,
                "team_name": "Real Salt Lake",
                "logo": "https://media.api-sports.io/football/teams/1606.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128550,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-09-26T02:30:00+00:00",
            "event_timestamp": 1569465000,
            "firstHalfStart": 1569465000,
            "secondHalfStart": 1569468600,
            "round": "Regular Season - 39",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Providence Park",
            "referee": "Jair Antonio Maruffo, USA",
            "homeTeam": {
                "team_id": 1617,
                "team_name": "Portland Timbers",
                "logo": "https://media.api-sports.io/football/teams/1617.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128556,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-09-29T21:00:00+00:00",
            "event_timestamp": 1569790800,
            "firstHalfStart": 1569790800,
            "secondHalfStart": 1569794400,
            "round": "Regular Season - 39",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Nima Saghafi, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 128564,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-10-06T20:00:00+00:00",
            "event_timestamp": 1570392000,
            "firstHalfStart": 1570392000,
            "secondHalfStart": 1570395600,
            "round": "Regular Season - 41",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Mercedes-Benz Stadium",
            "referee": "Ismail Elfath, USA",
            "homeTeam": {
                "team_id": 1608,
                "team_name": "Atlanta United FC",
                "logo": "https://media.api-sports.io/football/teams/1608.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 3,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "3-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 246444,
            "league_id": 294,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2019-10-19T17:00:00+00:00",
            "event_timestamp": 1571504400,
            "firstHalfStart": 1571504400,
            "secondHalfStart": 1571508000,
            "round": "Play-In Round",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Mercedes-Benz Stadium",
            "referee": "Kevin Stott, USA",
            "homeTeam": {
                "team_id": 1608,
                "team_name": "Atlanta United FC",
                "logo": "https://media.api-sports.io/football/teams/1608.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 564261,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-02-29T20:00:00+00:00",
            "event_timestamp": 1583006400,
            "firstHalfStart": 1583006400,
            "secondHalfStart": 1583010000,
            "round": "Regular Season - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Olympic Stadium",
            "referee": "Chris Penso, USA",
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 564273,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-03-07T18:30:00+00:00",
            "event_timestamp": 1583605800,
            "firstHalfStart": 1583605800,
            "secondHalfStart": 1583609400,
            "round": "Regular Season - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Fotis Bazakos, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 566027,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-07-10T00:00:00+00:00",
            "event_timestamp": 1594339200,
            "firstHalfStart": 1594339200,
            "secondHalfStart": 1594342800,
            "round": "Group Stage - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "ESPN Wide World of Sports Complex Field 17",
            "referee": "G. Gonzalez",
            "homeTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 566044,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-07-18T00:00:00+00:00",
            "event_timestamp": 1595030400,
            "firstHalfStart": 1595030400,
            "secondHalfStart": 1595034000,
            "round": "Group Stage - 3",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "ESPN Wide World of Sports Complex Field 17",
            "referee": "J. Dickerson",
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 566055,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-07-21T13:00:00+00:00",
            "event_timestamp": 1595336400,
            "firstHalfStart": 1595336400,
            "secondHalfStart": 1595340000,
            "round": "Group Stage - 4",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "ESPN Wide World of Sports Complex Field 17",
            "referee": "J. Marrufo",
            "homeTeam": {
                "team_id": 1601,
                "team_name": "Toronto FC",
                "logo": "https://media.api-sports.io/football/teams/1601.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 572443,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-07-26T02:30:00+00:00",
            "event_timestamp": 1595730600,
            "firstHalfStart": 1595730600,
            "secondHalfStart": 1595734200,
            "round": "8th Finals",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "ESPN Wide World of Sports Complex Field 17",
            "referee": "I. Elfath",
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "1-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 588598,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-08-20T23:30:00+00:00",
            "event_timestamp": 1597966200,
            "firstHalfStart": 1597966200,
            "secondHalfStart": 1597969800,
            "round": "Regular Season - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Robert Sibiga, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 588606,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-08-25T23:00:00+00:00",
            "event_timestamp": 1598396400,
            "firstHalfStart": 1598396400,
            "secondHalfStart": 1598400000,
            "round": "Regular Season - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Audi Field",
            "referee": "Guido Gonzales Jr, USA",
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-2",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 588620,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-08-30T00:00:00+00:00",
            "event_timestamp": 1598745600,
            "firstHalfStart": 1598745600,
            "secondHalfStart": 1598749200,
            "round": "Regular Season - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Jair Antonio Maruffo, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1602,
                "team_name": "New York Red Bulls",
                "logo": "https://media.api-sports.io/football/teams/1602.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "1-1",
                "fulltime": "1-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 588631,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-09-03T00:00:00+00:00",
            "event_timestamp": 1599091200,
            "firstHalfStart": 1599091200,
            "secondHalfStart": 1599094800,
            "round": "Regular Season - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "Villarrea Armando, USA",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 588642,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-09-06T23:30:00+00:00",
            "event_timestamp": 1599435000,
            "firstHalfStart": 1599435000,
            "secondHalfStart": 1599438600,
            "round": "Regular Season - 1",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Soldier Field",
            "referee": "R. Sibiga",
            "homeTeam": {
                "team_id": 1607,
                "team_name": "Chicago Fire",
                "logo": "https://media.api-sports.io/football/teams/1607.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 2,
            "score": {
                "halftime": "1-1",
                "fulltime": "1-2",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 588655,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-09-12T23:30:00+00:00",
            "event_timestamp": 1599953400,
            "firstHalfStart": 1599953400,
            "secondHalfStart": 1599957000,
            "round": "Regular Season - 2",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Subaru Park",
            "referee": "G. Gonzalez",
            "homeTeam": {
                "team_id": 1599,
                "team_name": "Philadelphia Union",
                "logo": "https://media.api-sports.io/football/teams/1599.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": 2,
            "goalsAwayTeam": 1,
            "score": {
                "halftime": "0-0",
                "fulltime": "2-1",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 628426,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-09-19T20:30:00+00:00",
            "event_timestamp": 1600547400,
            "firstHalfStart": 1600547400,
            "secondHalfStart": 1600551000,
            "round": "Regular Season - 3",
            "status": "Match Finished",
            "statusShort": "FT",
            "elapsed": 90,
            "venue": "Gillette Stadium",
            "referee": "R. Touchan",
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1604,
                "team_name": "New York City FC",
                "logo": "https://media.api-sports.io/football/teams/1604.png"
            },
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 0,
            "score": {
                "halftime": "0-0",
                "fulltime": "0-0",
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 628439,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-09-23T21:00:00+00:00",
            "event_timestamp": 1600894800,
            "firstHalfStart": null,
            "secondHalfStart": null,
            "round": "Regular Season - 3",
            "status": "Not Started",
            "statusShort": "NS",
            "elapsed": 0,
            "venue": "Gillette Stadium",
            "referee": null,
            "homeTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "awayTeam": {
                "team_id": 1614,
                "team_name": "Montreal Impact",
                "logo": "https://media.api-sports.io/football/teams/1614.png"
            },
            "goalsHomeTeam": null,
            "goalsAwayTeam": null,
            "score": {
                "halftime": null,
                "fulltime": null,
                "extratime": null,
                "penalty": null
            }
        },
        {
            "fixture_id": 628453,
            "league_id": 1264,
            "league": {
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "event_date": "2020-09-27T23:00:00+00:00",
            "event_timestamp": 1601247600,
            "firstHalfStart": null,
            "secondHalfStart": null,
            "round": "Regular Season - 4",
            "status": "Not Started",
            "statusShort": "NS",
            "elapsed": 0,
            "venue": "Audi Field",
            "referee": null,
            "homeTeam": {
                "team_id": 1615,
                "team_name": "DC United",
                "logo": "https://media.api-sports.io/football/teams/1615.png"
            },
            "awayTeam": {
                "team_id": 1609,
                "team_name": "New England Revolution",
                "logo": "https://media.api-sports.io/football/teams/1609.png"
            },
            "goalsHomeTeam": null,
            "goalsAwayTeam": null,
            "score": {
                "halftime": null,
                "fulltime": null,
                "extratime": null,
                "penalty": null
            }
        }
    ]

}

export default newEnglandRevolutionGames