<template>
  <div>
    <div id="about" class="o-container o-section u-margin-bottom-10">
      <tipi-header title="About"/>
      <div class="o-grid">
        <div class="o-grid__col u-8@sm u-offset-2@sm">
          <router-link class="c-button c-button--compact u-padding-left-0" :to="{name: 'about'}">Leer esta página en español</router-link>
          <h4>Mission</h4>
          <p>The holding of free elections is at the core of the representative democracy upon which today's liberal democratic systems are based. Through them, citizens exercise their right to political participation, and in doing so, democratically determine the composition of institutions by electing representatives that are in charge of making political decisions.</p>
          <p>In this context, electoral processes are part of the public space in which citizens and political parties establish a social dialogue to address issues of common interest. More specifically, of the three components that make up an electoral message (party, programme and candidate), the electoral manifesto is its key element. It is by means of electoral manifestos that the different political parties demonstrate their capacity to read and analyze reality, to interpret and identify current problems, and, where appropriate, they show their determination by proposing solutions. Thus, electoral manifestos are the vehicle for transmitting information that is necessary in order for the electorate to discriminate between alternatives and determine the consequences of their choices. In short, they serve the purpose of choosing "good policies" and the political parties that support them.</p>
          <p>Understanding the information presented by political parties in their electoral manifestos favours the electorate's decision process. However, the nature of electoral manifestos (large volumes of information, a lack of a common structure, the polysemic and predominantly verbal nature of their language, among others) makes them difficult to access, understand and interpret by citizens.</p>
          <p>Our proposal is to develop a citizen-centred standard for electoral manifestos. We believe that a standard and structured format for electoral manifestos can allow citizens to better identify the issues addressed (or not) by political parties, analyze the content of their proposals, identify political positions on specific issues, and compare and establish connections between different electoral manifestos. In short, it can foster a better understanding of the different stances among political parties that regularly compete with each other for votes. This is of vital importance in promoting processes that hold political parties accountabile; and accountability is an essential element of effective democratic systems and "one of the basic principles of good governance." It is, undoubtedly, a fundamental tool for achieving the empowerment of citizens and, with it, the advancement of social and political justice.</p>
          <h4>Principles</h4>
          <ol>
          <li value ="1">The transition toward socially and politically just societies requires that citizens gain power in order to more effectively make decisions that affect their own lives – including through participation in collective decision-making.</li>
          <li>Free elections are the basis of liberal democracies and give citizens the ability to democratically shape institutions.</li>
          <li>Accountability is a right of citizens, an obligation of political parties both in government and in the opposition, and an essential element of effective democratic systems.</li>
          <li>Electoral manifestos are the vehicle for transmitting information that is necessary in order for the electorate to discriminate between alternatives and determine the consequences of their choices.</li>
          <li>Civic technology has the potential to be an essential ally in the development of solutions that facilitate informed voting by citizens.</li>
          </ol>
          <h4>Partners</h4>
          <p>Open Manifesto is led by the Chair of Civic Technology and Empowerment (TCE according to its Spanish acronym) and by the #PoliticalWatch area of CIECODE.</p>
          <p>The TCE Chair develops open technologies for the mobilization, organization and collective action of citizens. It is promoted by Valencia's office for Transparency and Open Government (Delegació de Transparència i Govern Obert de la Diputació de València), together with the Polytechnic University of Valencia.</p>
          <p>CIECODE (Centre for Research and Studies on Coherence and Development) has specialized since 2011 in the development and innovation of civic technologies that facilitate access to information and participation by citizens on issues related to sustainable development. Its #PoliticalWatch area develops projects and pioneering tools to analyze the political and institutional activity in Spain. These provide updates by following the parliamentary activity and the electoral proposals of political parties concerning social and sustainable development issues (through reference platforms such as Polétika and innovative tools such as TiPi-Ciudadano or Parlamento 2030).</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TipiHeader } from 'tipi-uikit';

export default {
  name: 'about-english',
  components: {
    TipiHeader,
  },
}
</script>
