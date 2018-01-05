# podio-component
Podio API component for elastic.io platform

## Create new App in Podio

In order to make OAuth work you need a new App in your Podio. During app creation process you will be asked to specify
the callback URL, to process OAuth auehtncation via elastic.io platform your callback URL should be 

```
https://your-tenant.elastic.io/callback/oauth2
```

More information you can find [here](https://developers.podio.com/authentication)


## Configure OAuth Client key/secret

In the component repository you need to specify OAuth Client credentials as environment variables. You would need two variables

![image](https://cloud.githubusercontent.com/assets/56208/10132996/4de54eac-65da-11e5-92aa-a8b102d633e5.png)

You would need two variables:
 * ```PODIO_CLIENT_KEY``` - your OAuth client key
 * ```PODIO_CLIENT_SECRET``` - your OAUth client secret

