
FROM mcr.microsoft.com/dotnet/aspnet:5.0 as base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
COPY . /src
WORKDIR /src
RUN ls
RUN dotnet build "Potters_Patrol.csproj" -c Release -o /app/build

FROM build AS publish
# node
RUN apt-get update && apt-get install -y nodejs npm
# end node

RUN dotnet publish "Potters_Patrol.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Potters_Patrol.dll"]