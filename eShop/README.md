# eShop

An online shopping Web App in ASP.NET core to showcase Azure Cache for Redis by implementing cache-aside pattern, session store, and data store using it. 

## Features

This project framework provides the following features:

* Using cache for cache-aside pattern on product list to accelerate databases performance
* Distributed Cache tag helper on .cshtml to save CPU used in rendering view.
* Using cache as session store on last view item and shopping time
* Using cache as data-store for shopping cart
* User management:
    - Individual User authentication
    - RBAC authorization

## Getting Started

### Prerequisites

- .NET 7, ASP.NET core 7 or above

### Installation

- Create an Azure Redis Cache and obtain the connection string. [Instruction](https://learn.microsoft.com/azure/azure-cache-for-redis/quickstart-create-redis)

### Quickstart

1. Obtain the sample code.
    * Download zip. Extract the .zip file
    * or "git clone https://github.com/Azure-Samples/azure-cache-redis-demos.git" in Git command interface. Install Git if needed: [Git Downloads](https://git-scm.com/downloads)
2. Open a command line interface. Change to the project directory that contains the .csproj file: 
    * cd <Path_to_downloaded_code>/eShop/eShop
3. Initialize user secrets for development environment:
```
    dotnet user-secrets init
```
4. Obtain an instance of Azure Cache for Redis: [Quickstart: Create an open-source Redis cache](https://learn.microsoft.com/azure/azure-cache-for-redis/quickstart-create-redis)
5. Save Redis Cache connection string to User Secrets:
``` 
dotnet user-secrets set "ConnectionStrings:eShopRedisConnection" "your_cache_connectionstring"
```
6. Entity Framework migration to create database tables for user, products, and shopping cart items:
``` 
    dotnet ef database update --context eShopContext
    dotnet ef database update --context ApplicationDbContext
```
8. BUild and run the web application
```
    dotnet build
    set ASPNETCORE_ENVIRONMENT=Development
    dotnet run
```


## Demo

A demo app is included to show how to use the project.

To run the demo, follow these steps:

1. Launch web app in browse. It will be connected to the local databases and an Azure Cache for Redis instance
2. Navgiate to /Products route, sign in with the following credential:
* admin@eshop.com
* Admin@12345
3. Add products to the product list
4. Sign-out
6. View an item, add to shopping cart, continue to shop, check out, etc. 
7. (Optional) Create a new user and sign-in to browse the site.

## Resources

- AzureCache@microsoft.com for questions and feedback
- For guidance on how to implement patterns and best practices using more Azure services, refer to [Reliable web app pattern for .NET - Apply the pattern](https://learn.microsoft.com/azure/architecture/reference-architectures/reliable-web-app/dotnet/apply-pattern)