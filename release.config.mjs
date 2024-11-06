/**
 * @type {import('semantic-release').GlobalConfig}
 */

export default {
  branches: ['release', { name: 'next', prerelease: true }],
};
