---
title: Scoring TMDB movies and shows using Knowledge Based Recommendations
date: '2022-11-25'
tags: ['Machine Learning', 'Recommenders']
draft: false
summary: 
images: []
layout: PostLayout
---

Recently, I was working with TMDb movie database api, and are across this problem. I wanted to share how I solved it with a little math. We will make another parameter called Score using Weighted Rating (WR) method to calculate the score of each title.

### Overview

- Load movie data into a DataFrame
- Choose a standard to **score** the titles
- **Calculate the rating** of all movies that meet the criteria
- Rank the movies in **decending order**

### The Problem

My application needs to show the list of popular movies that the user might like based on the number of ratings and the average rating of that title. Initially, I was just sorting the average rating in decending order because of which some titles with very low number of reviews and higher ratings showed up causing irrelevant results.

To solve this I came up with a scoring criteria which will consider both the number of ratings and the average rating on the title.

### Scoring Criteria

For selecting the scoring criteria, we firstly need to consider that

A movie with 1000 ratings and with 8 as average rating must have a higher score that a movie which has 10 ratings with 9 as average rating.

To do that I went with this formula of weighted rating

![Weighted Rating Formula](https://cdn.hashnode.com/res/hashnode/image/upload/v1665667987688/fyw8r35xq.png)

Here, **v** indicates the total number of times the title has been rated

**m** represents the minimum requirement of a title to enter the list, basically only titles that have votes higher than **m** will enter the list

**R** is the average rating of the title

**C** is the average rating of all the titles in the list.

### DataFrame we have

![Data Table](https://cdn.hashnode.com/res/hashnode/image/upload/v1665668329370/ECslkPsiO.png)

Now looking at the data we have from the TMDb api response, **v** and **R** are in the data direcly as tmdb gives you the number of rating and average rating.

### Enough talk, lets code now

Firstly lets decide the value of m (minimum ratings to enter the list)

#### Decide value of m

You need to remember that the higher the value of m, the condition for a title to enter the list will be that strict.

Here, I chose to use 60% of the votes as the value of m.

```python
m = df['vote_count'].quantile(0.6)
m
---
Out: 50.0
```

#### Calculating the score

Calculating the average of all the title is pretty straight forward in python, just use mean

```python
C = df['vote_average'].mean()
C
---
Out: 5.53838599103349
```

Now calculate the score for each title in the dataframe

```python
def weighted_rating(x, m = m, C = C):
	v = x['vote_count']
	R = x['vote_average']
	return (v / (v + m) * R) + ( m / (v + m) * C)
df["score"] = df.apply(weighted_rating, axis = 1)

df.head()
```

![Results after score](https://cdn.hashnode.com/res/hashnode/image/upload/v1665669115614/Km1E5rZI1.png)

#### Finally, Sort

Let's finalise the list by sorting the list with scores of title in decending order, that will be out final result.

```python
movies = movies.sort_values('score', ascending=False)
movies[:70]
```

This will return the finalised list of movies that have higher score which basically means, the movies returned are liked most my many users.

Hope this small article helped you learn a new thing, if you have any questions, comment down below.
