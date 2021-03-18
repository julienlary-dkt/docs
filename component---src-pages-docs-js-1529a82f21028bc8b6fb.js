(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{KRSc:function(e,i){e.exports={chapters:[{title:"The Distribution: Create Powerful APIs with Ease",path:"distribution",items:[{id:"index",title:"Getting Started With API Platform: Create Your API and Your Jamstack Site",anchors:[{id:"introduction",title:"Introduction"},{id:"a-bookshop-api",title:"A Bookshop API"},{id:"installing-the-framework",title:"Installing the Framework",anchors:[{id:"using-the-api-platform-distribution-recommended",title:"Using the API Platform Distribution (Recommended)"},{id:"using-symfony-and-composer",title:"Using Symfony and Composer"}]},{id:"its-ready",title:"It's Ready"},{id:"bringing-your-own-model",title:"Bringing your Own Model"},{id:"plugging-the-persistence-system",title:"Plugging the Persistence System"},{id:"validating-data",title:"Validating Data"},{id:"adding-graphql-support",title:"Adding GraphQL Support"},{id:"the-admin",title:"The Admin"},{id:"a-nextjs-web-app",title:"A Next.js Web App"},{id:"hooking-your-own-business-logic",title:"Hooking Your Own Business Logic"},{id:"other-features",title:"Other Features"},{id:"screencasts",title:"Screencasts"}]},{id:"testing",title:"Testing the API",anchors:[{id:"creating-data-fixtures",title:"Creating Data Fixtures"},{id:"writing-functional-tests",title:"Writing Functional Tests"},{id:"writing-unit-tests",title:"Writing Unit Tests"},{id:"additional-and-alternative-testing-tools",title:"Additional and Alternative Testing Tools"},{id:"using-the-api-platform-distribution-for-end-to-end-testing",title:"Using the API Platform Distribution for End-to-end Testing"}]},{id:"debugging",title:"Debugging",anchors:[{id:"xdebug",title:"Xdebug"},{id:"add-a-development-stage-to-the-dockerfile",title:"Add a Development Stage to the Dockerfile"},{id:"configure-xdebug-with-docker-compose-override",title:"Configure Xdebug with Docker Compose Override"},{id:"troubleshooting",title:"Troubleshooting"}]}]},{title:"The API Component",path:"core",items:[{id:"index",title:"The API Platform Core Library",anchors:[{id:"features",title:"Features"},{id:"screencasts",title:"Screencasts"}]},{id:"getting-started",title:"Getting started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities",anchors:[{id:"product",title:"Product"}]}]},{id:"design",title:"General Design Considerations"},{id:"extending",title:"Extending API Platform",anchors:[{id:"doctrine-specific-extension-points",title:"Doctrine Specific Extension Points"},{id:"leveraging-the-built-in-infrastructure-using-composition",title:"Leveraging the Built-in Infrastructure Using Composition"}]},{id:"testing",title:"Testing Utilities",anchors:[{id:"the-test-httpclient",title:"The Test HttpClient"},{id:"api-test-assertions",title:"API Test Assertions"},{id:"http-test-assertions",title:"HTTP Test Assertions"}]},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"prefixing-all-routes-of-all-operations",title:"Prefixing All Routes of All Operations"},{id:"expose-a-model-without-any-routes",title:"Expose a model without any routes"}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"changing-location-of-the-graphql-endpoint",title:"Changing Location of the GraphQL Endpoint"},{id:"graphiql",title:"GraphiQL",anchors:[{id:"add-another-location-for-graphiql",title:"Add another Location for GraphiQL"}]},{id:"graphql-playground",title:"GraphQL Playground",anchors:[{id:"add-another-location-for-graphql-playground",title:"Add another Location for GraphQL Playground"}]},{id:"modifying-or-disabling-the-default-ide",title:"Modifying or Disabling the Default IDE"},{id:"request-with-applicationgraphql-content-type",title:"Request with application/graphql Content-Type"},{id:"operations",title:"Operations"},{id:"queries",title:"Queries",anchors:[{id:"global-object-identifier",title:"Global Object Identifier"},{id:"custom-queries",title:"Custom Queries"}]},{id:"mutations",title:"Mutations",anchors:[{id:"client-mutation-id",title:"Client Mutation Id"},{id:"custom-mutations",title:"Custom Mutations"}]},{id:"subscriptions",title:"Subscriptions",anchors:[{id:"enable-update-subscriptions-for-a-resource",title:"Enable Update Subscriptions for a Resource"},{id:"subscribe",title:"Subscribe"},{id:"receiving-an-update",title:"Receiving an Update"},{id:"subscriptions-cache",title:"Subscriptions Cache"}]},{id:"workflow-of-the-resolvers",title:"Workflow of the Resolvers",anchors:[{id:"disabling-resolver-stages",title:"Disabling Resolver Stages"}]},{id:"events",title:"Events"},{id:"filters",title:"Filters",anchors:[{id:"syntax-for-filters-with-a-list-of-key--value-arguments",title:"Syntax for Filters with a List of Key / Value Arguments"},{id:"filtering-on-nested-properties",title:"Filtering on Nested Properties"}]},{id:"pagination",title:"Pagination",anchors:[{id:"using-the-cursor-based-pagination",title:"Using the Cursor-based Pagination"},{id:"using-the-page-based-pagination",title:"Using the Page-based Pagination"},{id:"disabling-the-pagination",title:"Disabling the Pagination",anchors:[{id:"globally",title:"Globally"},{id:"for-a-specific-resource",title:"For a Specific Resource"},{id:"for-a-specific-resource-collection-operation",title:"For a Specific Resource Collection Operation"}]},{id:"partial-pagination",title:"Partial Pagination"}]},{id:"security",title:"Security"},{id:"serialization-groups",title:"Serialization Groups",anchors:[{id:"different-types-when-using-different-serialization-groups",title:"Different Types when Using Different Serialization Groups"}]},{id:"exception-and-error",title:"Exception and Error",anchors:[{id:"handling-exceptions-and-errors-logging-filtering-",title:"Handling Exceptions and Errors (Logging, Filtering, ...)"},{id:"formatting-exceptions-and-errors",title:"Formatting Exceptions and Errors",anchors:[{id:"custom-exception-normalizer",title:"Custom Exception Normalizer"}]}]},{id:"name-conversion",title:"Name Conversion",anchors:[{id:"nesting-separator",title:"Nesting Separator"}]},{id:"custom-types",title:"Custom Types"},{id:"modify-the-extracted-types",title:"Modify the Extracted Types"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"export-the-schema-in-sdl",title:"Export the Schema in SDL"},{id:"handling-file-upload",title:"Handling File Upload",anchors:[{id:"configuring-the-entity-receiving-the-uploaded-file",title:"Configuring the Entity Receiving the Uploaded File"},{id:"resolving-the-file-upload",title:"Resolving the File Upload"},{id:"using-the-createmediaobject-mutation",title:"Using the createMediaObject Mutation"}]},{id:"change-default-descriptions",title:"Change Default Descriptions"}]},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:"Injecting the Serializer in an ItemDataProvider"},{id:"injecting-extensions-pagination-filter-eagerloading-etc",title:"Injecting Extensions (Pagination, Filter, EagerLoading etc.)"},{id:"community-data-providers",title:"Community Data Providers"}]},{id:"data-persisters",title:"Data Persisters",anchors:[{id:"creating-a-custom-data-persister",title:"Creating a Custom Data Persister"},{id:"decorating-the-built-in-data-persisters",title:"Decorating the Built-In Data Persisters"},{id:"calling-multiple-datapersisters",title:"Calling multiple DataPersisters"}]},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-and-mongodb-odm-filters",title:"Doctrine ORM and MongoDB ODM Filters",anchors:[{id:"basic-knowledge",title:"Basic Knowledge"},{id:"search-filter",title:"Search Filter"},{id:"date-filter",title:"Date Filter",anchors:[{id:"managing-null-values",title:"Managing null Values"}]},{id:"boolean-filter",title:"Boolean Filter"},{id:"numeric-filter",title:"Numeric Filter"},{id:"range-filter",title:"Range Filter"},{id:"exists-filter",title:"Exists Filter",anchors:[{id:"using-a-custom-exists-query-parameter-name",title:"Using a Custom Exists Query Parameter Name"}]},{id:"order-filter-sorting",title:"Order Filter (Sorting)",anchors:[{id:"comparing-with-null-values",title:"Comparing with Null Values"},{id:"using-a-custom-order-query-parameter-name",title:"Using a Custom Order Query Parameter Name"}]},{id:"filtering-on-nested-properties",title:"Filtering on Nested Properties"},{id:"enabling-a-filter-for-all-properties-of-a-resource",title:"Enabling a Filter for All Properties of a Resource"}]},{id:"elasticsearch-filters",title:"Elasticsearch Filters",anchors:[{id:"ordering-filter-sorting",title:"Ordering Filter (Sorting)",anchors:[{id:"using-a-custom-order-query-parameter-name-elastic",title:"Using a Custom Order Query Parameter Name (Elastic)"}]},{id:"match-filter",title:"Match Filter"},{id:"term-filter",title:"Term Filter"},{id:"filtering-on-nested-properties-elastic",title:"Filtering on Nested Properties (Elastic)"}]},{id:"serializer-filters",title:"Serializer Filters",anchors:[{id:"group-filter",title:"Group Filter"},{id:"property-filter",title:"Property filter"}]},{id:"creating-custom-filters",title:"Creating Custom Filters",anchors:[{id:"creating-custom-doctrine-orm-filters",title:"Creating Custom Doctrine ORM Filters",anchors:[{id:"manual-service-and-attribute-registration",title:"Manual Service and Attribute Registration"}]},{id:"creating-custom-doctrine-mongodb-odm-filters",title:"Creating Custom Doctrine MongoDB ODM Filters"},{id:"creating-custom-elasticsearch-filters",title:"Creating Custom Elasticsearch Filters"},{id:"using-doctrine-orm-filters",title:"Using Doctrine ORM Filters"}]},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"subresources",title:"Subresources",anchors:[{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-custom-paths",title:"Using Custom Paths",anchors:[{id:"access-control-of-subresources",title:"Access Control of Subresources"},{id:"limiting-depth",title:"Limiting Depth"}]}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations",anchors:[{id:"configuration",title:"Configuration"}]},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-serialization-groups-per-operation",title:"Using Serialization Groups per Operation"},{id:"embedding-relations",title:"Embedding Relations",anchors:[{id:"normalization",title:"Normalization"},{id:"denormalization",title:"Denormalization"},{id:"force-iri-with-relations-of-the-same-type-parentchilds-relations",title:"Force IRI with relations of the same type (parent/childs relations)"}]},{id:"calculated-field",title:"Calculated Field"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per-item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-adding-extra-data",title:"Decorating a Serializer and Adding Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"},{id:"collection-relation",title:"Collection Relation"}]},{id:"validation",title:"Validation",anchors:[{id:"validating-submitted-data",title:"Validating Submitted Data"},{id:"using-validation-groups",title:"Using Validation Groups"},{id:"using-validation-groups-on-operations",title:"Using Validation Groups on Operations"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"sequential-validation-groups",title:"Sequential Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"},{id:"validation-on-collection-relations",title:"Validation on Collection Relations"},{id:"open-vocabulary-generated-from-validation-metadata",title:"Open Vocabulary Generated from Validation Metadata"},{id:"specification-property-restrictions",title:"Specification property restrictions"}]},{id:"security",title:"Security",anchors:[{id:"executing-access-control-rules-after-denormalization",title:"Executing Access Control Rules After Denormalization"},{id:"hooking-custom-permission-checks-using-voters",title:"Hooking Custom Permission Checks Using Voters"},{id:"configuring-the-access-control-error-message",title:"Configuring the Access Control Error Message"},{id:"filtering-collection-according-to-the-current-user-permissions",title:"Filtering Collection According to the Current User Permissions"},{id:"disabling-operations",title:"Disabling Operations"},{id:"changing-serialization-groups-depending-of-the-current-user",title:"Changing Serialization Groups Depending of the Current User"}]},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"configuring-formats-globally",title:"Configuring Formats Globally"},{id:"configuring-patch-formats",title:"Configuring PATCH Formats"},{id:"configuring-error-formats",title:"Configuring Error Formats"},{id:"configuring-formats-for-a-specific-resource-or-operation",title:"Configuring Formats For a Specific Resource or Operation"},{id:"supporting-custom-formats",title:"Supporting Custom Formats",anchors:[{id:"reusing-the-api-platform-infrastructure",title:"Reusing the API Platform Infrastructure"},{id:"contributing-support-for-new-formats",title:"Contributing Support for New Formats"}]}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination",anchors:[{id:"disabling-the-pagination-globally",title:"Disabling the Pagination Globally"},{id:"disabling-the-pagination-for-a-specific-resource",title:"Disabling the Pagination For a Specific Resource"},{id:"disabling-the-pagination-client-side",title:"Disabling the Pagination Client-side",anchors:[{id:"disabling-the-pagination-client-side-globally",title:"Disabling the Pagination Client-side Globally"},{id:"disabling-the-pagination-client-side-for-a-specific-resource",title:"Disabling the Pagination Client-side For a Specific Resource"}]}]},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page",anchors:[{id:"changing-the-number-of-items-per-page-globally",title:"Changing the Number of Items per Page Globally"},{id:"changing-the-number-of-items-per-page-for-a-specific-resource",title:"Changing the Number of Items per Page For a Specific Resource"},{id:"changing-the-number-of-items-per-page-client-side",title:"Changing the Number of Items per Page Client-side",anchors:[{id:"changing-the-number-of-items-per-page-client-side-globally",title:"Changing the Number of Items per Page Client-side Globally"},{id:"changing-the-number-of-items-per-page-client-side-for-a-specific-resource",title:"Changing the Number of Items per Page Client-side For a Specific Resource"}]}]},{id:"changing-maximum-items-per-page",title:"Changing Maximum Items Per Page",anchors:[{id:"changing-maximum-items-per-page-globally",title:"Changing Maximum Items Per Page Globally"},{id:"changing-maximum-items-per-page-for-a-specific-resource",title:"Changing Maximum Items Per Page For a Specific Resource"},{id:"changing-maximum-items-per-page-for-a-specific-resource-collection-operation",title:"Changing Maximum Items Per Page For a Specific Resource Collection Operation"}]},{id:"partial-pagination",title:"Partial Pagination",anchors:[{id:"partial-pagination-globally",title:"Partial Pagination Globally"},{id:"partial-pagination-for-a-specific-resource",title:"Partial Pagination For a Specific Resource"},{id:"partial-pagination-client-side",title:"Partial Pagination Client-side",anchors:[{id:"partial-pagination-client-side-globally",title:"Partial Pagination Client-side Globally"},{id:"partial-pagination-client-side-for-a-specific-resource",title:"Partial Pagination Client-side For a Specific Resource"}]}]},{id:"cursor-based-pagination",title:"Cursor-Based Pagination"},{id:"controlling-the-behavior-of-the-doctrine-orm-paginator",title:"Controlling The Behavior of The Doctrine ORM Paginator"},{id:"custom-controller-action",title:"Custom Controller Action"}]},{id:"deprecations",title:"Deprecating Resources and Properties (Alternative to Versioning)",anchors:[{id:"deprecating-resource-classes-operations-and-properties",title:"Deprecating Resource Classes, Operations and Properties"},{id:"setting-the-sunset-http-header-to-indicate-when-a-resource-or-an-operation-will-be-removed",title:"Setting the Sunset HTTP Header to Indicate When a Resource or an Operation Will Be Removed"}]},{id:"default-order",title:"Overriding Default Order"},{id:"performance",title:"Performance and Cache",anchors:[{id:"enabling-the-built-in-http-cache-invalidation-system",title:"Enabling the Built-in HTTP Cache Invalidation System",anchors:[{id:"extending-cache-tags-for-invalidation",title:"Extending Cache-Tags for Invalidation"}]},{id:"setting-custom-http-cache-headers",title:"Setting Custom HTTP Cache Headers"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes",anchors:[{id:"search-filter",title:"Search Filter"},{id:"eager-loading",title:"Eager Loading",anchors:[{id:"max-joins",title:"Max Joins"},{id:"fetch-partial",title:"Fetch Partial"},{id:"force-eager",title:"Force Eager"},{id:"override-at-resource-and-operation-level",title:"Override at Resource and Operation Level"},{id:"disable-eager-loading",title:"Disable Eager Loading"}]},{id:"partial-pagination",title:"Partial Pagination"}]},{id:"profiling-with-blackfireio",title:"Profiling with Blackfire.io"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-doctrine-orm-extension",title:"Custom Doctrine ORM Extension",anchors:[{id:"example",title:"Example",anchors:[{id:"blocking-anonymous-users",title:"Blocking Anonymous Users"}]}]},{id:"custom-doctrine-mongodb-odm-extension",title:"Custom Doctrine MongoDB ODM Extension"},{id:"custom-elasticsearch-extension",title:"Custom Elasticsearch Extension"}]},{id:"messenger",title:"Symfony Messenger Integration: CQRS and Async Message Processing",anchors:[{id:"installing-symfony-messenger",title:"Installing Symfony Messenger"},{id:"dispatching-a-resource-through-the-message-bus",title:"Dispatching a Resource through the Message Bus"},{id:"registering-a-message-handler",title:"Registering a Message Handler"},{id:"accessing-the-data-returned-by-the-handler",title:"Accessing the Data Returned by the Handler"},{id:"detecting-removals",title:"Detecting Removals"},{id:"using-messenger-with-an-input-object",title:"Using Messenger with an Input Object"}]},{id:"dto",title:"Using Data Transfer Objects (DTOs)",anchors:[{id:"specifying-an-input-or-an-output-data-representation",title:"Specifying an Input or an Output Data Representation"},{id:"updating-a-resource-with-a-custom-input",title:"Updating a Resource with a Custom Input"},{id:"disabling-the-input-or-the-output",title:"Disabling the Input or the Output"},{id:"per-operation-input-and-output",title:"Per Operation input and output"},{id:"inputoutput-metadata",title:"Input/Output Metadata"},{id:"using-objects-as-relations-inside-resources",title:"Using Objects As Relations Inside Resources"},{id:"validating-data-transfer-objects",title:"Validating Data Transfer Objects"}]},{id:"openapi",title:"OpenAPI Specification Support (formerly Swagger)",anchors:[{id:"using-the-openapi-command",title:"Using the OpenAPI Command"},{id:"overriding-the-openapi-specification",title:"Overriding the OpenAPI Specification"},{id:"using-the-openapi-and-swagger-contexts",title:"Using the OpenAPI and Swagger Contexts"},{id:"changing-the-name-of-a-definition",title:"Changing the Name of a Definition"},{id:"changing-operations-in-the-openapi-documentation",title:"Changing Operations in the OpenAPI Documentation"},{id:"changing-the-location-of-swagger-ui",title:"Changing the Location of Swagger UI",anchors:[{id:"disabling-swagger-ui-or-redoc",title:"Disabling Swagger UI or ReDoc"},{id:"manually-registering-the-swagger-ui-controller",title:"Manually Registering the Swagger UI Controller"}]},{id:"using-a-custom-asset-package-in-swagger-ui",title:"Using a custom Asset Package in Swagger UI"},{id:"overriding-the-ui-template",title:"Overriding the UI Template"},{id:"compatibility-layer-with-amazon-api-gateway",title:"Compatibility Layer with Amazon API Gateway"},{id:"oauth",title:"OAuth"},{id:"info-object",title:"Info Object"}]},{id:"json-schema",title:"JSON Schema Support",anchors:[{id:"generating-a-json-schema",title:"Generating a JSON Schema"},{id:"generating-a-json-schema-programmatically",title:"Generating a JSON Schema Programmatically"},{id:"testing",title:"Testing"}]},{id:"mercure",title:"Creating Async APIs using the Mercure Protocol",anchors:[{id:"installing-mercure-support",title:"Installing Mercure Support"},{id:"pushing-the-api-updates",title:"Pushing the API Updates"},{id:"dispatching-private-updates-authorized-mode",title:"Dispatching Private Updates (Authorized Mode)"},{id:"available-options",title:"Available Options"}]},{id:"push-relations",title:"Pushing Related Resources Using HTTP/2"},{id:"errors",title:"Errors Handling",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{id:"external-vocabularies",title:"Using External Vocabularies"},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Resolver",anchors:[{id:"defining-the-operation-segment-name-generator",title:"Defining the Operation Segment Name Generator"},{id:"registering-the-service",title:"Registering the Service"},{id:"configuring-it",title:"Configuring It"}]}]},{id:"extending-jsonld-context",title:"Extending JSON-LD AND Hydra Contexts",anchors:[{id:"json-ld",title:"JSON-LD"},{id:"hydra",title:"Hydra"}]},{id:"identifiers",title:"Identifiers",anchors:[{id:"custom-identifier-normalizer",title:"Custom Identifier Normalizer"},{id:"changing-identifier-in-a-doctrine-entity",title:"Changing Identifier in a Doctrine Entity"},{id:"supported-identifiers",title:"Supported Identifiers"}]},{id:"mongodb",title:"MongoDB Support",anchors:[{id:"overview",title:"Overview"},{id:"enabling-mongodb-support",title:"Enabling MongoDB Support"},{id:"creating-documents",title:"Creating Documents"},{id:"filtering",title:"Filtering"},{id:"creating-custom-extensions",title:"Creating Custom Extensions"},{id:"adding-execute-options",title:"Adding Execute Options"}]},{id:"elasticsearch",title:"Elasticsearch Support",anchors:[{id:"overview",title:"Overview"},{id:"enabling-reading-support",title:"Enabling Reading Support"},{id:"creating-models",title:"Creating Models",anchors:[{id:"creating-custom-mapping",title:"Creating custom mapping"}]},{id:"filtering",title:"Filtering"},{id:"creating-custom-extensions",title:"Creating Custom Extensions"}]},{id:"controllers",title:"Creating Custom Operations and Controllers",anchors:[{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"retrieving-the-entity",title:"Retrieving the Entity"},{id:"alternative-method",title:"Alternative Method"}]},{id:"events",title:"The Event System",anchors:[{id:"built-in-event-listeners",title:"Built-in Event Listeners"},{id:"custom-event-listeners",title:"Custom Event Listeners"}]},{id:"file-upload",title:"Handling File Upload",anchors:[{id:"installing-vichuploaderbundle",title:"Installing VichUploaderBundle"},{id:"configuring-the-entity-receiving-the-uploaded-file",title:"Configuring the Entity Receiving the Uploaded File"},{id:"the-controller",title:"The Controller"},{id:"resolving-the-file-url",title:"Resolving the File URL"},{id:"making-a-request-to-the-media_objects-endpoint",title:"Making a Request to the /media_objects Endpoint"},{id:"linking-a-mediaobject-resource-to-another-resource",title:"Linking a MediaObject Resource to Another Resource"}]},{id:"jwt",title:"JWT Authentication",anchors:[{id:"installing-lexikjwtauthenticationbundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"configuring-the-symfony-securitybundle",title:"Configuring the Symfony SecurityBundle",anchors:[{id:"adding-authentication-to-an-api-which-uses-a-path-prefix",title:"Adding Authentication to an API Which Uses a Path Prefix"}]},{id:"documenting-the-authentication-mechanism-with-swaggeropen-api",title:"Documenting the Authentication Mechanism with Swagger/Open API",anchors:[{id:"configuring-api-platform",title:"Configuring API Platform"},{id:"adding-a-new-api-key",title:"Adding a New API Key"},{id:"adding-endpoint-to-swaggerui-to-retrieve-a-jwt-token",title:"Adding endpoint to SwaggerUI to retrieve a JWT token"}]},{id:"testing",title:"Testing"}]},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:[{id:"create-your-deserializelistener-decorator",title:"Create your DeserializeListener Decorator"},{id:"creating-the-service-definition",title:"Creating the Service Definition"}]},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"️-deprecated-this-integration-is-deprecated-and-will-be-removed-in-api-platform-3",title:"⚠️ Deprecated: this integration is deprecated and will be removed in API Platform 3"},{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:"Creating a User Entity with Serialization Groups"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle Integration"},{id:"bootstrap",title:"Bootstraping the core library"},{id:"configuration",title:"Configuration",anchors:[{id:"global-resources-defaults",title:"Global Resources Defaults"}]}]},{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"The Schema Generator",anchors:[{id:"what-is-schemaorg",title:"What Is Schema.org?"},{id:"why-use-schemaorg-data-to-generate-a-php-model",title:"Why Use Schema.org Data to Generate a PHP Model?",anchors:[{id:"dont-reinvent-the-wheel",title:"Don't Reinvent the Wheel"},{id:"improve-seo-and-user-experience",title:"Improve SEO and User Experience"},{id:"be-ready-for-the-future",title:"Be Ready for The Future"}]},{id:"documentation",title:"Documentation"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"model-scaffolding",title:"Model Scaffolding",anchors:[{id:"going-further",title:"Going Further"}]},{id:"cardinality-extraction",title:"Cardinality Extraction"}]},{id:"configuration",title:"Configuration",anchors:[{id:"customizing-php-namespaces",title:"Customizing PHP Namespaces"},{id:"forcing-a-field-range",title:"Forcing a Field Range"},{id:"forcing-a-field-cardinality",title:"Forcing a Field Cardinality"},{id:"forcing-a-relation-table-name",title:"Forcing a Relation Table Name"},{id:"forcing-or-disabling-a-class-parent",title:"Forcing (or Disabling) a Class Parent"},{id:"forcing-a-class-to-be-abstract",title:"Forcing a Class to be Abstract"},{id:"forcing-a-nullable-property",title:"Forcing a Nullable Property"},{id:"forcing-a-unique-property",title:"Forcing a Unique Property"},{id:"making-a-property-read-only",title:"Making a Property Read-Only"},{id:"making-a-property-write-only",title:"Making a Property Write-Only"},{id:"forcing-a-property-to-be-in-a-serialization-group",title:"Forcing a Property to be in a Serialization Group"},{id:"forcing-an-embeddable-class-to-be-embedded",title:"Forcing an Embeddable Class to be Embedded"},{id:"author-phpdoc",title:"Author PHPDoc"},{id:"disabling-generators-and-creating-custom-ones",title:"Disabling Generators and Creating Custom Ones"},{id:"skipping-accessor-method-generation",title:"Skipping Accessor Method Generation"},{id:"disabling-the-id-generator",title:"Disabling the id Generator"},{id:"generating-uuids",title:"Generating UUIDs"},{id:"user-submitted-uuids",title:"User submitted UUIDs"},{id:"generating-custom-ids",title:"Generating Custom IDs"},{id:"disabling-usage-of-doctrine-collections",title:"Disabling Usage of Doctrine Collections"},{id:"changing-the-field-visibility",title:"Changing the Field Visibility"},{id:"generating-asserttype-annotations",title:"Generating @Assert\\Type Annotations"},{id:"forcing-doctrine-inheritance-mapping-annotation",title:"Forcing Doctrine Inheritance Mapping Annotation"},{id:"interfaces-and-doctrine-resolve-target-entity-listener",title:"Interfaces and Doctrine Resolve Target Entity Listener"},{id:"custom-schemas",title:"Custom Schemas"},{id:"checking-goodrelation-compatibility",title:"Checking GoodRelation Compatibility"},{id:"php-file-header",title:"PHP File Header"},{id:"full-configuration-reference",title:"Full Configuration Reference"}]}]},{title:"The Admin Component",path:"admin",items:[{id:"index",title:"The API Platform Admin",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"}]},{id:"handling-relations",title:"Handling Relations",anchors:[{id:"embedded-relations",title:"Embedded Relations"},{id:"display-a-field-of-an-embedded-relation",title:"Display a Field of an Embedded Relation"},{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]},{id:"schema.org",title:"Using the Schema.org Vocabulary",anchors:[{id:"displaying-related-resources-name-instead-of-its-iri",title:"Displaying Related Resource's Name Instead of its IRI"},{id:"emails-urls-and-identifiers",title:"Emails, URLs and Identifiers"}]},{id:"validation",title:"Validation",anchors:[{id:"client-side-validation",title:"Client-side Validation"},{id:"server-side-validation",title:"Server-side Validation"}]},{id:"authentication-support",title:"Authentication Support"},{id:"file-upload",title:"Handling File Upload"},{id:"performance",title:"Performance",anchors:[{id:"retrieve-all-relations-in-one-request",title:"Retrieve All Relations in One Request"}]},{id:"customizing",title:"Customizing the Admin",anchors:[{id:"customizing-the-admins-main-page-and-the-resource-list",title:"Customizing the Admin's Main Page and the Resource List"},{id:"customizing-the-list-view",title:"Customizing the List View"},{id:"customizing-the-show-view",title:"Customizing the Show View"},{id:"customizing-the-create-form",title:"Customizing the Create Form"},{id:"customizing-the-edit-form",title:"Customizing the Edit Form"},{id:"going-further",title:"Going Further"}]},{id:"components",title:"Components",anchors:[{id:"resource-components",title:"Resource Components",anchors:[{id:"adminguesser",title:"AdminGuesser",anchors:[{id:"props",title:"Props"}]},{id:"resourceguesser",title:"ResourceGuesser",anchors:[{id:"resourceguesser-props",title:"ResourceGuesser Props"}]}]},{id:"page-components",title:"Page Components",anchors:[{id:"listguesser",title:"ListGuesser",anchors:[{id:"listguesser-props",title:"ListGuesser Props"}]},{id:"createguesser",title:"CreateGuesser",anchors:[{id:"createguesser-props",title:"CreateGuesser Props"}]},{id:"editguesser",title:"EditGuesser",anchors:[{id:"editguesser-props",title:"EditGuesser Props"}]},{id:"showguesser",title:"ShowGuesser",anchors:[{id:"showguesser-props",title:"ShowGuesser Props"}]}]},{id:"hydra",title:"Hydra",anchors:[{id:"hydraadmin",title:"HydraAdmin",anchors:[{id:"hydraadmin-props",title:"HydraAdmin Props"}]},{id:"data-provider",title:"Data Provider"},{id:"schema-analyzer",title:"Schema Analyzer"}]},{id:"other-components",title:"Other Components",anchors:[{id:"pagination",title:"Pagination"},{id:"fieldguesser",title:"FieldGuesser",anchors:[{id:"fieldguesser-props",title:"FieldGuesser Props"}]},{id:"inputguesser",title:"InputGuesser",anchors:[{id:"inputguesser-props",title:"InputGuesser Props"}]}]}]}]},{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"The API Platform Client Generator",anchors:[{id:"generated-react-and-react-native-apps-updated-in-real-time",title:"Generated React and React Native Apps, Updated in Real Time"},{id:"features",title:"Features"}]},{id:"nextjs",title:"Next.js Generator",anchors:[{id:"install",title:"Install",anchors:[{id:"next--express-server",title:"Next + Express Server"},{id:"installing-the-generator-dependencies",title:"Installing the Generator Dependencies"}]},{id:"generating-routes",title:"Generating Routes"},{id:"starting-the-project",title:"Starting the Project"},{id:"screenshots",title:"Screenshots"}]},{id:"nuxtjs",title:"Nuxt.js Generator",anchors:[{id:"install",title:"Install",anchors:[{id:"nuxt",title:"Nuxt"},{id:"installing-the-generator-dependencies",title:"Installing the Generator Dependencies"}]},{id:"updating-nuxtjs-config",title:"Updating nuxtjs config"},{id:"generating-routes",title:"Generating Routes"},{id:"updating-default-layout",title:"Updating default layout"},{id:"starting-the-project",title:"Starting the Project"},{id:"screenshots",title:"Screenshots"}]},{id:"vuetify",title:"Vuetify Generator",anchors:[{id:"install-with-docker",title:"Install with Docker"},{id:"install-without-docker",title:"Install without Docker"},{id:"generating-the-vuejs-web-app",title:"Generating the VueJS Web App"}]},{id:"quasar",title:"Quasar Framework Generator"},{id:"react",title:"React Generator",anchors:[{id:"install",title:"Install"},{id:"generating-a-progressive-web-app",title:"Generating a Progressive Web App"},{id:"screenshots",title:"Screenshots"}]},{id:"react-native",title:"React Native generator",anchors:[{id:"install",title:"Install"},{id:"generating-a-native-app",title:"Generating a Native App"},{id:"screenshots-in-ios-simulator",title:"Screenshots in iOS Simulator"}]},{id:"vuejs",title:"Vue.js Generator"},{id:"typescript",title:"TypeScript Interfaces",anchors:[{id:"example",title:"Example"}]},{id:"troubleshooting",title:"Troubleshooting",anchors:[{id:"self-signed-tls-certificate",title:"Self-Signed TLS Certificate"},{id:"authenticated-api",title:"Authenticated API"},{id:"apidocumentation-doesnt-exist",title:"ApiDocumentation doesn't exist"},{id:"cannot-read-property-type",title:"Cannot read property '@type'"},{id:"dereferencing-a-url-did-not-result-in-a-json-object",title:"Dereferencing a URL did not result in a JSON object"},{id:"docker-distribution-on-windows-and-hot-reloading",title:"Docker distribution on Windows and hot-reloading"}]}]},{title:"Deployment",path:"deployment",items:[{id:"index",title:"Deploying API Platform Applications"},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:[{id:"preparing-your-cluster-and-your-local-machine",title:"Preparing Your Cluster and Your Local Machine"},{id:"creating-and-publishing-the-docker-images",title:"Creating and Publishing the Docker Images"},{id:"deploying",title:"Deploying"},{id:"initializing-the-database",title:"Initializing the Database"},{id:"tiller-rbac-issue",title:"Tiller RBAC Issue"}]},{id:"docker-compose",title:"Deploying with Docker Compose",anchors:[{id:"installing-the-docker-compose-setup-for-production",title:"Installing the Docker Compose Setup for Production"},{id:"building-and-pushing-the-docker-images",title:"Building and Pushing the Docker Images"},{id:"pulling-the-docker-images-and-running-the-services",title:"Pulling the Docker Images and Running the Services"},{id:"running-the-docker-compose-setup-for-production-locally",title:"Running the Docker Compose Setup for Production Locally"}]},{id:"heroku",title:"Deploying an API Platform App on Heroku"},{id:"traefik",title:"Implement Træfik Into API Platform Dockerized",anchors:[{id:"basic-implementation",title:"Basic Implementation"},{id:"known-issues",title:"Known Issues"},{id:"going-further",title:"Going Further"},{id:"multiple-instances",title:"Multiple Instances"},{id:"more-generic-approach",title:"More Generic Approach"}]}]},{title:"General Information",path:"extra",items:[{id:"philosophy",title:"API Platform's Philosophy"},{id:"releases",title:"The Release Process"},{id:"enterprise",title:"API Platform for Enterprise",anchors:[{id:"enterprise-ready-open-source-softwaremanaged-for-you",title:"Enterprise-ready open source software—managed for you"}]},{id:"security",title:"Security Policy",anchors:[{id:"reporting-a-security-issue",title:"Reporting a Security Issue"},{id:"resolving-process",title:"Resolving Process"},{id:"security-updates-with-tidelift",title:"Security Updates With Tidelift"},{id:"issue-severity",title:"Issue Severity",anchors:[{id:"attack-complexity",title:"Attack Complexity"},{id:"impact",title:"Impact"},{id:"affected-projects",title:"Affected Projects"},{id:"score-totals",title:"Score Totals"},{id:"severity-levels",title:"Severity levels"}]},{id:"credits",title:"Credits"}]},{id:"troubleshooting",title:"Troubleshooting",anchors:[{id:"using-docker",title:"Using Docker",anchors:[{id:"with-docker-toolbox-on-windows",title:"With Docker Toolbox on Windows"},{id:"error-starting-the-web-server",title:"Error Starting The Web Server"}]},{id:"using-api-platform-and-jms-serializer-in-the-same-project",title:"Using API Platform and JMS Serializer in the same project"},{id:"upstream-sent-too-big-header-while-reading-response-header-from-upstream-nginx-502-error",title:'"upstream sent too big header while reading response header from upstream" NGINX 502 Error'}]},{id:"contribution-guides",title:"Contribution guides"},{id:"conduct",title:"Contributor Code of Conduct",anchors:[{id:"our-pledge",title:"Our Pledge"},{id:"our-standards",title:"Our Standards"},{id:"our-responsibilities",title:"Our Responsibilities"},{id:"scope",title:"Scope"},{id:"enforcement",title:"Enforcement"},{id:"attribution",title:"Attribution"}]}]}]}},iaV1:function(e,i,t){"use strict";t.r(i);var n=t("q1tI"),a=t.n(n),r=t("TJpk"),o=t.n(r),s=t("Wbzz"),l=t("7oih"),d=t("d8MH"),c=t("KRSc"),g=t.n(c),u=function(e){var i=e.anchors,t=e.path;return a.a.createElement("ol",null,i.map((function(e){var i=e.id,n=e.title,r=t+"#"+i;return a.a.createElement("li",{key:r},a.a.createElement(s.Link,{to:r},n))})))},p=function(e){var i=e.items,t=e.path;return a.a.createElement("ol",null,i.map((function(e){var i=e.id,n=e.title,r=e.anchors,o=t;return"index"!==i&&(o+="/"+i),a.a.createElement("li",{key:o},a.a.createElement(s.Link,{to:o},n),r&&a.a.createElement(u,{anchors:r,path:o}))})))};i.default=function(e){var i=e.location;return a.a.createElement(l.a,{location:i},a.a.createElement("div",{className:"page__docs"},a.a.createElement(o.a,{title:"API Platform Documentation"}),a.a.createElement("div",{className:"container docs__content docs__content_toc"},a.a.createElement("h1",null,"API Platform Documentation"),g.a.chapters.map((function(e){var i=e.path,t=e.title,n=e.items,r="/docs/"+i;return a.a.createElement("section",{key:i},a.a.createElement("h2",null,a.a.createElement(s.Link,{to:r},t)),a.a.createElement(p,{items:n,path:r}))}))),a.a.createElement(d.a,{nav:g.a.chapters,location:i})))}}}]);
//# sourceMappingURL=component---src-pages-docs-js-1529a82f21028bc8b6fb.js.map