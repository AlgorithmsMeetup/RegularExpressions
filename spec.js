problems.forEach(function(problem) {
  var regex = problem.regex;
  it(problem.description, function() {
    problem.matches.forEach(function(match) {
      if (!regex.test(match)) {
        throw new Error("Your regex " + regex + " should match " + match + ", but didn't.")
      }
    });
    problem.doesntMatch.forEach(function(noMatch) {
      if (regex.test(noMatch)) {
        throw new Error("Your regex " + regex + " should not match " + noMatch + ", but did.")
      }
    });
  });
});
