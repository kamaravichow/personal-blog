---
title: How Machine Learning Suggests you Movies or Shows you Watch
date: '2022-11-25'
tags: ['Machine Learning', 'Recommenders']
draft: false
summary: Recommendation systems are pretty common these days. Netflix, Prime Video, YouTube and other streaming platforms use these recommendation systems to suggest a movie that you might like to watch according to your previous watch history.
images: []
layout: PostLayout
---

Recommendation systems are pretty common these days. Netflix, Prime Video, YouTube and other streaming platforms use these recommendation systems to suggest a movie that you might like to watch according to your previous watch history.

Hearing this for the first time, got me excited. I started researching and building a simple prototype of a movie recommendation algorithm. I’ll walk you thought what I learnt from my research and building a working engine.

We’ll also build a system in python using scikit-learn python package. You must have some basic knowledge on python programming and machine learning terms like dataset, model, training and building a model.

# What is basically a Recommendation System?

Let’s understand with an example Netflix, Asks you to choose few titles that you like to personalize the experience for you when you first sign up or create a new profile.

![Image for post](https://miro.medium.com/max/2376/1*LOM-otpR-rhNJT1gjC99BA.png)

Choose everything you like | Netflix

After we select a few titles that we might have watched already on TV or on Netflix previously.

Netflix starts to use its own recommendation algorithm to predict or suggest the movies or shows that you probably might like to watch.

![Image for post](https://miro.medium.com/max/2376/1*h78cDBQwysvO2rCqU12aLQ.png)

Personalising…| Netflix

After the algorithm predicts movies that match your interests based on the data you’ve provided previously. It shows similar titles on its home page to improve user experience. This way you don’t need to find a movie that you find interesting.

![Image for post](https://miro.medium.com/max/2378/1*DzcPEvK0hCHiDPFBo5fa9A.png)

Homepage | Netflix

Not only Netflix even YouTube uses some recommendation system to show you relevant videos on your homepage.

Recommendation systems nowadays are more complex and intelligent. Not only on your past activity they work with different kinds of data like suggesting you movies that people nearby your location like, or if it’s a social media platform like Instagram, it might consider what your friends like too.

So, now as you understood how recommendation systems basically work. Let’s build one ourselves using some simple and free tools.

# **Building A Simple Recommendation System**

There are many kinds of Recommendation systems like

- Popularity based recommendation system

Like trending page in YouTube or Netflix which suggests you based on the views and likes or watch time the video or a movie got in the last few days.

- Content-based recommendation system

Once your interest or past activity was collected. In simple, after you watched a video or a movie them the recommendation system finds other videos that are similar to the one you’ve already watched and recommend a similar video back to you.

This is the system we’re going to be building.

We’ll be taking one input (A movie title) and recommend similar movies as output (back to the user).

- Collaborative Filtering System

This is the recommendation system made popular by Netflix. It's basically a peer to peer recommendations. If a person 1 watched a movie and Person 2 also watches the movie then the movie watched by person 1 later will be suggested to the person 2 vice-versa.

This matches the people with similar interests and recommends to each other.

**The concept behind our system:**

As we’re going to build a content-based recommendation system, our main goal is to find the similarity score between two objects or strings. So, we use a concept called Cosine-Similarity.

**Understanding Cosine-Similarity:**

For example :

**Text One:** Jack Rose Jack Jack

**Text Two:** Rose Jack Rose Rose

How do we get a similarity score between the casts of these two texts? This is where Cosine Similarity Comes in to play.

It basically comes up with a mathematical number of similarities between the casts of the two titles.

**The math behind the Cosine Similarity:**

![Image for post](https://miro.medium.com/max/1215/1*kngtl_qt3UAGww9O7_gEJg.png)

Vector Representation | Cosine Similarity

In the graph, I just plotted the word occurrence in the example text.

How do we find the distance between those two vectors? Right, as we learnt in high school there are two simple methods for that.

The Angular Distance: The Theta, angular distance between those vectors,

The Euclidean Distance: Connect the ends of the vectors and the length is the Euclidean distance.

We’re going to use the CosTheta Formula, Which most of you might come across in high school.

![Image for post](https://miro.medium.com/max/536/1*CHTUjtaensX3H8pxh9lYLQ.png)

Angular Distance Formula | Cosine Similarity

Okay, Enough theory… Let’s get our hands on the code. Open your favourite text editor (I prefer VS code).

Firstly you need to have a few python packages installed :

scikit-learn — Doc

Start by importing some packages

```
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
```

Learn more about [CountVectorizer](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html)

Create a variable with our two texts :

```
text =["Jack Rose Jack  Jack", "Rose Jack Rose Rose"]
```

We use count vectorizer method to convert our strings into vectors like (3,1) & (1,3).

To count the matrix we’re going to use fit_transform to make a matrix out of our vectors.

```
cv = CountVectorizer()
count_matrix = cv.fit_transform(text)
```

You can use the print count_matrix.toarray() to see the output matrix. This is going to show a NumPy array something like

```
[[3,1]
[1,3]]
```

So, we got our vector matrix, now we’re going to use a built-in method called cosine similarity to find the similarity (distance) between these vectors.

```
smilarity_scores = cosine_similarity(count_matrix)
print(similarity_scores)
```

When you run the program, it shows up an array with the similarity scores. So, this is basically our concept behind our recommendation system.

As you now know the concept and the basic math behind our system, let's start building our engine.

**Let’s Start :**

Start by creating a new python file and call it something like recommender.py.

Let’s start by importing the required packages :

```
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
```

From the previous example, we import pandas and NumPy additionally to process and read our dataset.

For this system, I’ve used IMDB dataset which I found on kaggle.com and cleaned it a little bit so we can use it with our system.

You can download the dataset from my repository:

https://github.com/kamaravichow/MovieRecommendations/blob/master/movie_dataset.csv

If you open it in excel or an office software it should look like :

![Image for post](https://miro.medium.com/max/2375/1*z1Gc1H2UEXiF-18xVUqYug.png)

IMDB cleaned Dataset | movies_dataset.csv

It has columns with features like cast, keywords, popularity and more… We’re going to use them to find the similarity between the movies using cosine similarity.

Download the dataset and place it in the folder with our python script.

```
df = pd.read_csv("movie_dataset.csv")
```

We use pandas to read the CSV dataset and load it to df (DataFrame) variable.

```
def get_title_from_index(index):
    return df[df.index == index]["title"].values[0] def get_index_from_title(title):
    return df[df.title == title]["index"].values[0]
```

These are two helper functions which we’re going to use later.

Now we need to get the feature that we need to use to find a similarity score. For now, I’m going to use keywords, cast, genres, and director.

```
features = ['keywords','cast','genres','director']
```

You can use other features too according to your requirement.

Let’s now combine all the features to the dataframe :

```
for feature in features:
    df[feature] = df[feature].fillna('')
```

And a function to combine them into one:

```
def combine_features(row):
 try:
    return row['keywords'] +" "+row['cast']+" "+row["genres"]+"   "+row["director"] except:  print "Error:", row  df["combined_features"] = df.apply(combine_features,axis=1)
```

You can see the combined features with a print method :

```
print "Combined Features:", df["combined_features"].head()
```

Now let’s initialise count vectoriser to turn them into vectors which we can work with :

```
cv = CountVectorizer()
count_matrix = cv.fit_transform(df["combined_features"])
```

Getting the similiarity based on the count_matrix

```
cosine_sim = cosine_similarity(count_matrix)
```

Now we take the input from the user. That is the liked movie by the user.

```
movie_user_likes = "Spectre"
```

Use the helper function to get the index of the movie from the name of the movie.

```
movie_index = get_index_from_title(movie_user_likes)
```

Get the list of similar movies (indices of similar movies):

```
similar_movies =  list(enumerate(cosine_sim[movie_index]))
```

The list will be in the ascending order but, we need the highest similar movie on the top so we sort it to descending order according to the similarity scores.

```
sorted_similar_movies = sorted(similar_movies,key=lambda x:x[1],reverse=True)
```

Now to look at the result, we’ll print the most matched 25 movies to the console(output)

```
i=0
for element in sorted_similar_movies:
  print get_title_from_index(element[0])
  i=i+1
  if i>25:
   break
```

This will show up the most similar 25 movies to the console.

So, this is how basically we build a content-based recommendation system using sci-kit-learn and python.
