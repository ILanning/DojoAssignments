/*1*/
select name, language, percentage from countries
left join languages
on countries.id = languages.country_id
where language = "Slovene";

/*2*/
select countries.name, count(cities.id) as city_count from countries
left join cities
on countries.id = cities.country_id
group by countries.id
order by city_count desc;

/*3*/
select cities.name, cities.population from countries
left join cities
on countries.id = cities.country_id
where cities.population > 500000 and countries.name = "Mexico"
order by cities.population desc;

/*4*/
select name, language, percentage from countries
left join languages
on countries.id = languages.country_id
where percentage > 89
order by percentage desc;

/*5*/
select name, surface_area, population from countries
where surface_area < 501 and population > 100000;

/*6*/
select name, capital, life_expectancy, government_form from countries
where capital > 200 and life_expectancy > 75 and government_form = "Constitutional Monarchy";

/*7*/
select countries.name, cities.name, cities.district, cities.population from countries
left join cities
on countries.id = cities.country_id
where countries.name = "Argentina" and district = "Buenos Aires" and cities.population > 500000;

/*8*/
select region, count(countries.id) as country_count from countries
group by region
order by country_count desc;