# clusty
Clusty is a command-line utility for running many node applicates as a single process

## Use

Install clusty globally:
```sh
npm install -g clusty
```

You run clusty at the root path of a number of applications. Clusty allows you to `start`, `stop` or `watch` your cluster. It will log output files to `~/.clusty` and you can execute tail operations on the log files.

Given an application structure as shown below, you would execute clusty commands with the working directory as `app`.
```sh
\app
|__\service-a
|__\service-b
|__\service-c
```

Inside of the root application directoy, you can run clusty to manage the sub-services:
```sh
# start the cluster of services
clusty start

# stop the cluster of service
clusty stop
```

You can also execute any shell script across all directories
```sh
clusty <script>
clusty 'npm install'
clusty 'npm run build'
```

You can see what is running in the cluster
```sh
clusty ps
```

You can look at the log files being generated by your application:
```sh
clusty tail
clusty tail <uid|index>
clusty tail evil_tesla
```

You can stream the tail as well
```sh
clusty tail -f
clusty tail -f <uid|index>
clusty tail -f evil_tesla
```