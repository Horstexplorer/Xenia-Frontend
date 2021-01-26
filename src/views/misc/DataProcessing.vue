<template>
  <div>
    <h1>Privacy</h1>
      Please note that this privacy policy may change at any time to reflect changes or feature additions.
    <pre>
      <h2>What data do we process</h2>
      To allow Xenia to work properly it is required to processes various datasets provided by discord.
      Those contain but are not limited to all chat interactions while the bot is present.

      <h2>What data do we store</h2>
      - guild-, channel-, message- and user-ids
      - timestamps of interactions
      - settings and meta data (ids, names, pictures, ...) about the guild, its channels, members (as long as they exist) and users (indefinitely)
      - encrypted messages up to 60 days (when this feature has been enabled / not been disabled by the guild moderator)
      - oauth tokens (website)

      <h2>What happens to the data</h2>
      All data collected may not be shared with third parties with the exception where it is applicable by law.
      The data collected might only be used to sustain and further improve the service provided by Xenia.

      <h2>Concerns or Exceptional Deletion Requests</h2>
      If there are any other concerns relating to privacy or you have exceptional reason to request a deletion, please message Horstexplorer#2131 on Discord.
    </pre>

    <v-btn small text elevation="0" to="/contact">Contact</v-btn>
  </div>
</template>

<script>
export default {
  name: "DataProcessing"
}
</script>

<style scoped>

</style>