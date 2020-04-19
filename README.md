# Reddit Clone Requirements

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