# eShop

An online shopping Web App in ASP.NET core to showcase Azure Cache for Redis by implementing cache-aside pattern, session store, and data store using it. 

## Features

This project framework provides the following features:

* Using cache for cache-aside pattern on product list to accelerate databases performance
* Using cache as session store on last view item and shopping time
* Using cache as data-store for shopping cart
* User management:
    - Individual User authentication
    - RBAC authorization

## Getting Started

### Prerequisites

- .NET 7, ASP.NET core 7

### Installation

- Create an Azure Redis Cache and obtain the connection string. [Instruction](https://learn.microsoft.com/azure/azure-cache-for-redis/quickstart-create-redis)

### Quickstart

1. git clone https://github.com/Azure-Samples/azure-cache-redis-demos.git
2. cd eShop
3. dotnet user-secrets init
4. dotnet user-secrets set "ConnectionStrings:eShopRedisConnection" "your_cache_connectionstring"
5. dotnet ef databases update --context eShopContext
6. dotnet ef databases update --context ApplicationDbContext
7. dotnet build
8. dotnet run


## Demo

A demo app is included to show how to use the project.

To run the demo, follow these steps:

1. Launch web app in browse. It will be connected to the local databases and an Azure Cache for Redis instance
2. Navgiate to /Products route, sign in with the following credential:
* admin@eshop.com
* Admin@12345
3. Add products to the product list
4. Sign-out
5. Create a new user and sign-in
6. View an item, add to shopping cart, continue to shop, check out, etc. 

## Resources

- AzureCache@microsoft.com for questions and feedback
- For guidance on how to implement patterns and best practices using more Azure services, refer to [Reliable web app pattern for .NET - Apply the pattern](https://learn.microsoft.com/azure/architecture/reference-architectures/reliable-web-app/dotnet/apply-pattern)