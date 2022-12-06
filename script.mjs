import { $ } from 'zx';

const client = {
    createdEnvId: 'set-from-script'
};

await $`echo "MY_ENV=${client.createdEnvId}" >> $GITHUB_ENV`;

// changes
