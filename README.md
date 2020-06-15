# Reddit Clone Requirements

## Things to do with Josh

- Help me with fetch (see GetUserInfo.js which is called in UserUpdate.js
- Help me with buying a domain, just making sure I don't F it **up**
- Lookover my functions in routeHandlers.js

## Tyler's TODO

- Implement the GetUserInfo function the way Josh and I discussed
- Create user profile update form (maybe extract sign up form to be reused and take a request type (post patch etc.) prop)
- Make user lookup handle No Data response 204 I **think**
- Replace buttons in NavBar with Button Components
- Extract all forms to separate elements WITH their styles
- For reused Styles (like forms) extract styles to separate component and put them in a styles folder
- Reimplement modal using React.portal
- Remove transitions, will be handled with Springs animation library
- Remake forms to be controlled components (hooked into state)

## Roadmap

  1. ~~!CSS Styles~~
     1. ~~Establish quick overall theme for site~~
        1. ~~Fonts~~
        2. ~~Colors~~
           1. ~~Major color scheme~~
           2. ~~Alternate colors~~
        3. ~~Structure~~
  2. Users
     1. ~~READ user~~
        1. ~~Extract user lookup search box to it's own component~~
     2. ~~CREATE user~~
     3. UPDATE user (can use same form as create but have the info prefilled)
     4. DELETE user
  3. Populate Content Types Data Table, can do manually with postgres
  4. Post
     1. CREATE Post
     2. READ Post
     3. Display list of posts on homepage (reverse chronological order)
     4. UPDATE Post (use same form as create)
     5. DELETE Post
  5. Comments
     1. CREATE
     2. READ
     3. Display list at bottom of post
        1. Set up nesting
     4. Display comment counter
     5. UPDATE Comment
     6. DELETE Comment
  6. Navbar and footer using React Router?
  7. User Authentication
  8. Like Button (+2 instead of +1, LOL)
  9. Post Sorting Algorithm
  10. Search
  
## Flow ideas

- Create user and log in
- CRUD posts/comments
-----
- Up/down vote posts/comments
- Subreddits
- Moderation (different types of users; different permissions)
- Algorithms for composing a feed of posts
- Direct messaging
- Muting

### CRUD backend

- Posts (CRUD)
- Comments on posts (CRUD)
- Heirarchy/threaded comments

### CRUD frontend

- Post/comment CRUD flow
- Display posts/comments

### CRUD data model

### JSON Contract

- List of posts:
  - ID
  - Author
  - Date Created
  - Date Last Updated
  - Metadata
  - List of Comments:
    - ID
    - Author
    - Foreign ID
    - Metadata
    - Date Created
    - Date Last Updated
    - List of Subcomments:
      - ...further nesting

```JSON
{
  "posts": [
    {
      "ID": 1,
      "author": "Tyler",
      "date_created": "1587333444",
      "date_last_updated": "1587333444",
      "meta": {
        "subject": "first",
        "body": "first post!",
        "img": null
      },
      "comments": [
        {
          "ID": 2,
          "author": "Josh",
          "date_created": "1587333445",
          "date_last_updated": "1587333445",
          "meta": {
            "body": "that is so lame",
            "img": null
          },
          "comments": [
            {
              "ID": 3,
              "author": "Tyler",
              "date_created": "1587333446",
              "date_last_updated": "1587333446",
              "meta": {
                "body": "wut ever. u just 2 slo bro",
                "img": null
              },
              "comments": null
            }
          ]
        }
      ]
    }
  ]
}
```