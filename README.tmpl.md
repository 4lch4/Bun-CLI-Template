# {{ .PackageName }}

{{ .PackageDescription }}

## Usage

In order to use the {{ .PackageDisplayName }} CLI tool you have to install it first, which can be done using your favorite node package manager:

```sh
bun install -g {{ .PackageName }}
```

Then you can get version number to verify the installation:

```sh
{{ .BinName }} --version
```

Or you can display the help to see what commands are available:

```sh
{{ .BinName }} --help
```
