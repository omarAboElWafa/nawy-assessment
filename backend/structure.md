my-app/
├── apps/                   # Business components (appartments, users, etc.)
│   ├── appartments/           # appartments-related logic
│   │   ├── entry-points/   # API endpoints (e.g., REST, GraphQL)
│   │   │   ├── api/
│   │   │   │   ├── appartments.controller.ts
│   │   │   │   ├── appartments.routes.ts
│   │   ├── domain/         # Domain logic, business rules, DTOs, services
│   │   │   ├── appartments.service.ts
│   │   │   ├── appartment.dto.ts
│   │   ├── data-access/    # DB logic (models, queries)
│   │   │   ├── appartment.model.ts
│   │   │   ├── appartments.repository.ts
│   ├── users/
│       ├── entry-points/
│       │   ├── api/
│       │   │   ├── users.controller.ts
│       │   │   ├── users.routes.ts
│       ├── domain/
│       │   ├── users.service.ts
│       │   ├── user.dto.ts
│       ├── data-access/
│       │   ├── user.model.ts
│       │   ├── users.repository.ts
├── libraries/              # Shared utilities (e.g., logging, auth, configs)
│   ├── logger/
│   │   ├── package.json
│   │   ├── src/
│   │       ├── index.ts
│   │       ├── logger.service.ts
│   ├── authenticator/
│       ├── package.json
│       ├── src/
│           ├── index.ts
│           ├── auth.middleware.ts
├── config/                 # Configurations (env-specific, hierarchical)
│   ├── index.ts
│   ├── default.json
│   ├── production.json
│   ├── development.json
├── tests/                  # Test suites (unit, integration, end-to-end)
│   ├── appartments/
│   ├── users/
├── scripts/                # Automation scripts (e.g., migrations, seeding)
│   ├── db-migrate.ts
│   ├── seed-data.ts
├── .eslintrc               # ESLint config
├── .prettierrc             # Prettier config
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md
