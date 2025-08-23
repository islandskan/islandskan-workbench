# Data schema

> Explain \_data directory and the global data
> (Bookshelf.json and its schema)

```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "itemId": {
                "type": "integer",
                "minimum": 1,
                "description": "Unique, auto increment identifier for the item"
            },
            "type": {
                "type": "string",
                "description": "The type of bookshelf item; book, article, video, movie, series, game, music, podcast, learning resource, audiobook, other people's projects"
            },
            "title": {
                "type": "string",
                "description": "The title/name of the item"
            },
            "creator": {
                "type": ["string", "null"],
                "description": "Name of author, writer, artist, director, or other creator of the listed item"
            },
            "year": {
                "type": ["integer", "null"],
                "minimum": 1000,
                "maximum": 9999,
                "description": "The year the item was released/published"
            },
            "description": {
                "type": ["string", "null"],
                "description": "A short description about the item"
            },
            "externalURI": {
                "type": ["string", "null"],
                "format": "uri",
                "description": "Optional, external link. Absolute URI allowed(protocol+host+path)"
            },
            "relatedThoughtURI": {
                "type": ["string", "null"],
                "format": "uri-reference",
                "description": "Optional link to related Thought post. Absolute(protocol+host+path) and relative URI(relative to root or to file location) allowed"
            }
        },
        "required": ["itemId", "type", "title"],
        "additionalProperties": false
    }
}
```

Example of a JSON object instance

```json
{
    "itemId": 12,
    "type": "book",
    "title": "Data and communication signals",
    "creator": null,
    "year": null,
    "description": null,
    "externalURI": null,
    "relatedThoughtURI": null
}
```
