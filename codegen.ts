import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:81/query',
  documents: ['src/**/*.query.graphql', 'src/**/*.fragment.graphql'],
  generates: {
    'src/graphql/__generated__/type.ts': { plugins: ['typescript'] },
    'src/graphql/__generated__/operations.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './type',
      },
      plugins: ['typescript-operations', 'fragment-matcher', 'typescript-urql'],
      config: {
        withHooks: false,
      },
    },
    // 'src/graphql/__generated__/hooks.ts': {
    //   preset: 'near-operation-file',
    //   presetConfig: {
    //     importOperationTypesFrom: '@/src/graphql/__generated__',
    //     folder: '__generated__',
    //     extension: '.hooks.tsx',
    //     baseTypesPath: '../type',
    //   },
    //   plugins: ['typescript-urql'],
    //   config: {
    //     withHooks: true,
    //     importOperationTypesFrom: 'Operations',
    //     documentMode: 'external',
    //     importDocumentNodeExternallyFrom: '@/src/graphql/__generated__/operations.ts',
    //   },
    // },
    // hooks: {
    //   preset: 'near-operation-file',
    //   presetConfig: {
    //     importOperationTypesFrom: '@/src/graphql/__generated__',
    //     folder: '__generated__',
    //     extension: '.hooks.tsx',
    //     baseTypesPath: 'src/graphql/__generated__/type.ts',
    //   },
    //   plugins: ['typescript-urql'],
    //   config: {
    //     withHooks: true,
    //     importOperationTypesFrom: '@/src/graphql/__generated__',
    //     documentMode: 'external',
    //     importDocumentNodeExternallyFrom: '@/src/graphql/__generated__/operations.ts',
    //   },
    // },
    'src/graphql/__generated__/hooks.ts': {
      presetConfig: {
        importOperationTypesFrom: '@/src/graphql/__generated__',
        baseTypesPath: '../type',
      },
      plugins: ['typescript-urql'],
      config: {
        withHooks: true,
        importOperationTypesFrom: 'Operations',
        documentMode: 'external',
        importDocumentNodeExternallyFrom: '@/src/graphql/__generated__/operations.ts',
      },
    },
    './graphql.schema.json': {
      plugins: ['urql-introspection'],
    },
  },
};

export default config;
